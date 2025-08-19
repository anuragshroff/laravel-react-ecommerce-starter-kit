import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Package, MoreHorizontal } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Orders', href: '/admin/orders' },
];

interface OrdersProps {
    orders: any[];
}

export default function AdminOrders({ orders }: OrdersProps) {
    // Mock data for demonstration
    const mockOrders = [
        {
            id: 1,
            order_number: 'ORD-001',
            customer: 'John Doe',
            email: 'john@example.com',
            total: 299.99,
            status: 'completed',
            created_at: '2024-01-15',
            items_count: 2
        },
        {
            id: 2,
            order_number: 'ORD-002',
            customer: 'Jane Smith',
            email: 'jane@example.com',
            total: 149.99,
            status: 'processing',
            created_at: '2024-01-14',
            items_count: 1
        },
        {
            id: 3,
            order_number: 'ORD-003',
            customer: 'Bob Johnson',
            email: 'bob@example.com',
            total: 599.99,
            status: 'pending',
            created_at: '2024-01-13',
            items_count: 3
        }
    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'completed':
                return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
            case 'processing':
                return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>;
            case 'pending':
                return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
            case 'cancelled':
                return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
            default:
                return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Orders Management" />
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
                        <p className="text-gray-500">Manage customer orders and fulfillment</p>
                    </div>
                    <Button>
                        <Package className="mr-2 h-4 w-4" />
                        Export Orders
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>All Orders</CardTitle>
                                <CardDescription>A list of all customer orders</CardDescription>
                            </div>
                            <div className="relative">
                                <Search className="absolute top-2.5 left-2 h-4 w-4 text-gray-500" />
                                <Input placeholder="Search orders..." className="w-64 pl-8" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order #</TableHead>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Items</TableHead>
                                    <TableHead>Total</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mockOrders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell className="font-medium">{order.order_number}</TableCell>
                                        <TableCell>
                                            <div>
                                                <div className="font-medium">{order.customer}</div>
                                                <div className="text-sm text-gray-500">{order.email}</div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{order.items_count} items</TableCell>
                                        <TableCell>${order.total}</TableCell>
                                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                                        <TableCell>{new Date(order.created_at).toLocaleDateString()}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                                    <DropdownMenuItem>Update Status</DropdownMenuItem>
                                                    <DropdownMenuItem>Print Invoice</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-red-600">Cancel Order</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                                Showing {mockOrders.length} orders
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" disabled>
                                    Previous
                                </Button>
                                <Button variant="outline" size="sm">
                                    Next
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}