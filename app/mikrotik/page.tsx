"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCcw, Power, PowerOff, Activity, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";

// Typescript interface matching our merged server response
interface MikrotikUser {
  ".id": string;
  name: string;
  disabled: string;
  group: string;
  "total-download"?: string;
  "total-upload"?: string;
  "total-uptime"?: string;
  "active-sessions"?: string;
}

export default function Network() {
  const [routerData, setRouterData] = useState<MikrotikUser[]>([]);
  const [loading, setLoading] = useState(false);

  // Helper: Format Bytes to MB/GB
  const formatBytes = (bytes: string | number | undefined) => {
    const b = parseInt(String(bytes)) || 0;
    if (b === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(b) / Math.log(k));
    return parseFloat((b / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // 1. Fetch the merged data (Users + Monitor Stats)
  const getData = async () => {
    setLoading(true);
    try {
      // This hits the GET method in route.ts which now includes monitor data
      const { data } = await axios.get("/api/users");
      setRouterData(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error("Failed to connect to router");
    } finally {
      setLoading(false);
    }
  };

  // 2. Toggle Status (Enable/Disable)
  const toggleStatus = async (userId: string, currentStatus: string) => {
    const isDisabled = currentStatus === "false"; 
    try {
      await axios.patch("/api/users", { userId, isDisabled });
      toast.success(`User ${isDisabled ? 'disabled' : 'enabled'} successfully`);
      getData(); // Refresh to show updated status
    } catch (error) {
      toast.error("Failed to update user status");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 bg-background text-foreground">
      {/* Page Header */}
      <div className="flex justify-between items-center border-b pb-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Network Admin</h1>
          <p className="text-muted-foreground mt-1">Manage users and monitor live data usage.</p>
        </div>
        <Button onClick={getData} disabled={loading} variant="default" className="shadow-lg">
          <RefreshCcw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? "Syncing..." : "Refresh Data"}
        </Button>
      </div>

      {/* Users Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {routerData.length > 0 ? (
          routerData.map((user) => (
            <Card key={user['.id']} className="transition-all hover:shadow-md border-2">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-bold">{user.name}</CardTitle>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">{user.group}</p>
                </div>
                <Badge 
                  variant={user.disabled === "true" ? "destructive" : "default"}
                  className="px-3 py-1"
                >
                  {user.disabled === "true" ? "Inactive" : "Online"}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-4 space-y-6">
                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-3 rounded-xl border">
                    <div className="flex items-center text-xs text-muted-foreground mb-1">
                      <ArrowDownCircle className="w-3 h-3 mr-1 text-blue-500" /> DOWNLOAD
                    </div>
                    <span className="font-mono font-bold">{formatBytes(user['total-download'])}</span>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-xl border">
                    <div className="flex items-center text-xs text-muted-foreground mb-1">
                      <ArrowUpCircle className="w-3 h-3 mr-1 text-green-500" /> UPLOAD
                    </div>
                    <span className="font-mono font-bold">{formatBytes(user['total-upload'])}</span>
                  </div>
                </div>

                {/* Connection Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center">
                      <Activity className="w-3 h-3 mr-2" /> Uptime
                    </span>
                    <span className="font-medium">{user['total-uptime'] || "0s"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Active Sessions</span>
                    <span className="font-bold">{user['active-sessions'] || "0"}</span>
                  </div>
                </div>

                {/* Actions */}
                <Button 
                  className="w-full font-semibold" 
                  variant={user.disabled === "true" ? "default" : "outline"}
                  onClick={() => toggleStatus(user['.id'], user.disabled)}
                >
                  {user.disabled === "true" ? (
                    <><Power className="mr-2 h-4 w-4" /> Enable User</>
                  ) : (
                    <><PowerOff className="mr-2 h-4 w-4" /> Disable User</>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed rounded-3xl bg-muted/20">
            {loading ? (
              <div className="flex flex-col items-center gap-2">
                <RefreshCcw className="h-8 w-8 animate-spin text-primary" />
                <p className="text-lg font-medium">Scanning MikroTik Users...</p>
              </div>
            ) : (
              <p className="text-muted-foreground">No users found in MikroTik User Manager.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}