import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Truck, Package, MapPin, AlertTriangle, Plus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Logistics', href: '/admin/logistics' },
];

interface LogisticsProps {
    inventory: any[];
    shipping: any[];
    warehouses: any[];
}

export default function AdminLogistics({ inventory, shipping, warehouses }: LogisticsProps) {
    const mockInventory = [
        { id: 1, product: 'iPhone 15 Pro', sku: 'IPH15P-001', stock: 45, reserved: 5, available: 40, location: 'Warehouse A' },
        { id: 2, product: 'MacBook Air M3', sku: 'MBA-M3-001', stock: 12, reserved: 2, available: 10, location: 'Warehouse B' },
        { id: 3, product: 'AirPods Pro', sku: 'APP-001', stock: 3, reserved: 1, available: 2, location: 'Warehouse A' },
    ];

    const mockShipments = [
        { id: 'SHP-001', order: 'ORD-001', carrier: 'FedEx', tracking: 'FX123456789', status: 'in_transit', destination: 'New York' },
        { id: 'SHP-002', order: 'ORD-002', carrier: 'UPS', tracking: 'UP987654321', status: 'delivered', destination: 'California' },
        { id: 'SHP-003', order: 'ORD-003', carrier: 'DHL', tracking: 'DH456789123', status: 'pending', destination: 'Texas' },
    ];

    const mockWarehouses = [
        { id: 1, name: 'Warehouse A', location: 'New York', capacity: 10000, used: 7500, available: 2500 },
        { id: 2, name: 'Warehouse B', location: 'California', capacity: 8000, used: 5200, available: 2800 },
        { id: 3, name: 'Warehouse C', location: 'Texas', capacity: 12000, used: 9800, available: 2200 },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Logistics Management" />
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Logistics Management</h1>
                        <p className="text-gray-500">Monitor inventory, shipping, and warehouse operations</p>
                    </div>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Warehouse
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Inventory</CardTitle>
                                <Package className="h-4 w-4 text-blue-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,234</div>
                            <p className="text-xs text-gray-500">Items in stock</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Active Shipments</CardTitle>
                                <Truck className="h-4 w-4 text-green-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">89</div>
                            <p className="text-xs text-gray-500">In transit</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Warehouses</CardTitle>
                                <MapPin className="h-4 w-4 text-purple-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-gray-500">Active locations</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Low Stock Alerts</CardTitle>
                                <AlertTriangle className="h-4 w-4 text-red-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">5</div>
                            <p className="text-xs text-gray-500">Items need restock</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Inventory Status</CardTitle>
                            <CardDescription>Current stock levels and availability</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Stock</TableHead>
                                        <TableHead>Available</TableHead>
                                        <TableHead>Location</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockInventory.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <div>
                                                    <div className="font-medium">{item.product}</div>
                                                    <div className="text-sm text-gray-500">{item.sku}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>{item.stock}</TableCell>
                                            <TableCell>
                                                <span className={item.available < 5 ? 'text-red-600 font-medium' : ''}>
                                                    {item.available}
                                                </span>
                                            </TableCell>
                                            <TableCell>{item.location}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Shipments</CardTitle>
                            <CardDescription>Latest shipping activities</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Shipment ID</TableHead>
                                        <TableHead>Carrier</TableHead>
                                        <TableHead>Destination</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockShipments.map((shipment) => (
                                        <TableRow key={shipment.id}>
                                            <TableCell className="font-medium">{shipment.id}</TableCell>
                                            <TableCell>{shipment.carrier}</TableCell>
                                            <TableCell>{shipment.destination}</TableCell>
                                            <TableCell>
                                                <Badge className={
                                                    shipment.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                                    shipment.status === 'in_transit' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                                }>
                                                    {shipment.status.replace('_', ' ')}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Warehouse Capacity</CardTitle>
                        <CardDescription>Storage utilization across all warehouses</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {mockWarehouses.map((warehouse) => (
                                <div key={warehouse.id} className="p-4 border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h3 className="font-medium">{warehouse.name}</h3>
                                            <p className="text-sm text-gray-500">{warehouse.location}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-medium">{warehouse.used.toLocaleString()} / {warehouse.capacity.toLocaleString()}</p>
                                            <p className="text-sm text-gray-500">{Math.round((warehouse.used / warehouse.capacity) * 100)}% utilized</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-blue-600 h-2 rounded-full" 
                                            style={{ width: `${(warehouse.used / warehouse.capacity) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}