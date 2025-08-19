import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowRight, BarChart3, ChevronDown, DollarSign, MoreHorizontal, Package2, Search, Users, Plus } from 'lucide-react';
import { Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Dashboard',
        href: '/admin/dashboard',
    },
];

interface DashboardProps {
    stats: {
        totalProducts: number;
        totalUsers: number;
        totalCategories: number;
        totalOrders: number;
    };
    recentProducts: any[];
    recentUsers: any[];
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(value);
};

const AdminDashboard = ({ stats, recentProducts, recentUsers }: DashboardProps) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Dashboard" />
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="mb-8">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <p className="text-gray-500">Welcome back! Here's an overview of your platform.</p>
                </div>

                {/* Analytics Cards */}
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="shadow-sm transition-shadow hover:shadow-md">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Products</CardTitle>
                                <div className="rounded-lg bg-blue-100 p-2">
                                    <Package2 size={18} className="text-blue-600" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalProducts}</div>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Button variant="link" className="flex h-auto items-center p-0 text-blue-600">
                                View details <ArrowRight size={16} className="ml-1" />
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="shadow-sm transition-shadow hover:shadow-md">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
                                <div className="rounded-lg bg-green-100 p-2">
                                    <Users size={18} className="text-green-600" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalUsers}</div>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Button variant="link" className="flex h-auto items-center p-0 text-green-600">
                                View details <ArrowRight size={16} className="ml-1" />
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="shadow-sm transition-shadow hover:shadow-md">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Categories</CardTitle>
                                <div className="rounded-lg bg-purple-100 p-2">
                                    <BarChart3 size={18} className="text-purple-600" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalCategories}</div>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Button variant="link" className="flex h-auto items-center p-0 text-purple-600">
                                View details <ArrowRight size={16} className="ml-1" />
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="shadow-sm transition-shadow hover:shadow-md">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Orders</CardTitle>
                                <div className="rounded-lg bg-amber-100 p-2">
                                    <DollarSign size={18} className="text-amber-600" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.totalOrders}</div>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Button variant="link" className="flex h-auto items-center p-0 text-amber-600">
                                View details <ArrowRight size={16} className="ml-1" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* Recent Products Table */}
                <div className="mb-8">
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle>Recent Products</CardTitle>
                                <div className="flex gap-2">
                                    <div className="relative">
                                        <Search className="absolute top-2.5 left-2 h-4 w-4 text-gray-500" />
                                        <Input placeholder="Search products..." className="w-64 pl-8" />
                                    </div>
                                    <Button>
                                        <Plus className="mr-2 h-4 w-4" />
                                        Add Product
                                    </Button>
                                </div>
                            </div>
                            <CardDescription>A list of your recent products</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Stock</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentProducts.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <img 
                                                        src={product.images && product.images.length > 0 ? `/storage/${product.images[0]}` : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiNGM0Y0RjYiLz48L3N2Zz4='} 
                                                        alt={product.name} 
                                                        className="h-10 w-10 rounded-md object-cover" 
                                                    />
                                                    <span className="font-medium">{product.name}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>{product.category?.name || 'N/A'}</TableCell>
                                            <TableCell>{formatCurrency(product.price)}</TableCell>
                                            <TableCell>{product.stock || 0}</TableCell>
                                            <TableCell>
                                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                                    Active
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                                        <DropdownMenuItem>View details</DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="text-sm text-gray-500">Showing {recentProducts.length} of {stats.totalProducts} products</div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" disabled>
                                    Previous
                                </Button>
                                <Button variant="outline" size="sm">
                                    Next
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>

                {/* Recent Users Table */}
                <div>
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle>Recent Users</CardTitle>
                                <div className="flex gap-2">
                                    <div className="relative">
                                        <Search className="absolute top-2.5 left-2 h-4 w-4 text-gray-500" />
                                        <Input placeholder="Search users..." className="w-64 pl-8" />
                                    </div>
                                    <Button variant="outline">
                                        Filter
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <CardDescription>A list of your recent users</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>User</TableHead>
                                        <TableHead>Role</TableHead>
                                        <TableHead>Joined</TableHead>
                                        <TableHead>Orders</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentUsers.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>
                                                <div>
                                                    <div className="font-medium">{user.name}</div>
                                                    <div className="text-sm text-gray-500">{user.email}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>User</TableCell>
                                            <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                                            <TableCell>-</TableCell>
                                            <TableCell>
                                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                                    Active
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        <DropdownMenuItem>View profile</DropdownMenuItem>
                                                        <DropdownMenuItem>Send message</DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600">Suspend user</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <div className="text-sm text-gray-500">Showing {recentUsers.length} recent users</div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" disabled>
                                    Previous
                                </Button>
                                <Button variant="outline" size="sm">
                                    Next
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
};

export default AdminDashboard;