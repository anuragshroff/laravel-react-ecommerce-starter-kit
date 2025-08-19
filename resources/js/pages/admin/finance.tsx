import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DollarSign, TrendingUp, Download, Calendar } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Finance', href: '/admin/finance' },
];

interface FinanceProps {
    commissions: any[];
    payouts: any[];
    reports: any[];
}

export default function AdminFinance({ commissions, payouts, reports }: FinanceProps) {
    const mockCommissions = [
        { id: 1, seller: 'John Doe', amount: 45.50, rate: '5%', order: 'ORD-001', status: 'pending' },
        { id: 2, seller: 'Jane Smith', amount: 23.75, rate: '5%', order: 'ORD-002', status: 'paid' },
        { id: 3, seller: 'Bob Johnson', amount: 89.25, rate: '5%', order: 'ORD-003', status: 'pending' },
    ];

    const mockPayouts = [
        { id: 1, seller: 'John Doe', amount: 450.00, method: 'Bank Transfer', status: 'completed', date: '2024-01-15' },
        { id: 2, seller: 'Jane Smith', amount: 275.50, method: 'PayPal', status: 'processing', date: '2024-01-14' },
        { id: 3, seller: 'Bob Johnson', amount: 892.75, method: 'Bank Transfer', status: 'pending', date: '2024-01-13' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Finance Management" />
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Finance Management</h1>
                        <p className="text-gray-500">Commission, payouts, and financial reports</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <Calendar className="mr-2 h-4 w-4" />
                            Generate Report
                        </Button>
                        <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Export Data
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Commission</CardTitle>
                                <DollarSign className="h-4 w-4 text-green-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$3,434</div>
                            <p className="text-xs text-gray-500">+15% from last month</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Pending Payouts</CardTitle>
                                <TrendingUp className="h-4 w-4 text-orange-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$1,618</div>
                            <p className="text-xs text-gray-500">3 sellers waiting</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Platform Revenue</CardTitle>
                                <DollarSign className="h-4 w-4 text-blue-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$68,680</div>
                            <p className="text-xs text-gray-500">+12% from last month</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Commission Rate</CardTitle>
                                <TrendingUp className="h-4 w-4 text-purple-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">5%</div>
                            <p className="text-xs text-gray-500">Standard rate</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Commissions</CardTitle>
                            <CardDescription>Latest commission earnings</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Seller</TableHead>
                                        <TableHead>Order</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockCommissions.map((commission) => (
                                        <TableRow key={commission.id}>
                                            <TableCell className="font-medium">{commission.seller}</TableCell>
                                            <TableCell>{commission.order}</TableCell>
                                            <TableCell>${commission.amount}</TableCell>
                                            <TableCell>
                                                <Badge className={commission.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                                                    {commission.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Seller Payouts</CardTitle>
                            <CardDescription>Payment history to sellers</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Seller</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Method</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockPayouts.map((payout) => (
                                        <TableRow key={payout.id}>
                                            <TableCell className="font-medium">{payout.seller}</TableCell>
                                            <TableCell>${payout.amount}</TableCell>
                                            <TableCell>{payout.method}</TableCell>
                                            <TableCell>
                                                <Badge className={
                                                    payout.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                    payout.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                                }>
                                                    {payout.status}
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
                        <CardTitle>Financial Reports</CardTitle>
                        <CardDescription>Generate and download financial reports</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Monthly Revenue Report</h3>
                                <p className="text-sm text-gray-500 mb-4">Detailed breakdown of monthly earnings</p>
                                <Button variant="outline" size="sm">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </Button>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Commission Report</h3>
                                <p className="text-sm text-gray-500 mb-4">Seller commission breakdown</p>
                                <Button variant="outline" size="sm">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </Button>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Tax Report</h3>
                                <p className="text-sm text-gray-500 mb-4">Tax calculations and summaries</p>
                                <Button variant="outline" size="sm">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}