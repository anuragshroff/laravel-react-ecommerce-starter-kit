import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CreditCard, Plus, Settings, TrendingUp, DollarSign } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Payments', href: '/admin/payments' },
];

interface PaymentsProps {
    gateways: any[];
    transactions: any[];
}

export default function AdminPayments({ gateways, transactions }: PaymentsProps) {
    const mockGateways = [
        { id: 1, name: 'Stripe', status: 'active', fee: '2.9% + $0.30', volume: '$45,230' },
        { id: 2, name: 'PayPal', status: 'active', fee: '3.4% + $0.30', volume: '$23,450' },
        { id: 3, name: 'Square', status: 'inactive', fee: '2.6% + $0.10', volume: '$0' },
    ];

    const mockTransactions = [
        { id: 'TXN-001', amount: 299.99, gateway: 'Stripe', status: 'completed', date: '2024-01-15' },
        { id: 'TXN-002', amount: 149.99, gateway: 'PayPal', status: 'pending', date: '2024-01-14' },
        { id: 'TXN-003', amount: 599.99, gateway: 'Stripe', status: 'failed', date: '2024-01-13' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Payment Management" />
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Payment Management</h1>
                        <p className="text-gray-500">Manage payment gateways and transactions</p>
                    </div>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Gateway
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
                                <DollarSign className="h-4 w-4 text-green-600" />
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
                                <CardTitle className="text-sm font-medium text-gray-500">Transactions</CardTitle>
                                <TrendingUp className="h-4 w-4 text-blue-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,234</div>
                            <p className="text-xs text-gray-500">+8% from last month</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Success Rate</CardTitle>
                                <CreditCard className="h-4 w-4 text-purple-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">98.5%</div>
                            <p className="text-xs text-gray-500">+0.2% from last month</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Gateways</CardTitle>
                            <CardDescription>Manage your payment providers</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {mockGateways.map((gateway) => (
                                    <div key={gateway.id} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div className="flex items-center space-x-3">
                                            <CreditCard className="h-8 w-8 text-blue-600" />
                                            <div>
                                                <h3 className="font-medium">{gateway.name}</h3>
                                                <p className="text-sm text-gray-500">Fee: {gateway.fee}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="text-right">
                                                <p className="font-medium">{gateway.volume}</p>
                                                <Badge className={gateway.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                                                    {gateway.status}
                                                </Badge>
                                            </div>
                                            <Button variant="ghost" size="icon">
                                                <Settings className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                            <CardDescription>Latest payment transactions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Transaction ID</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Gateway</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockTransactions.map((transaction) => (
                                        <TableRow key={transaction.id}>
                                            <TableCell className="font-medium">{transaction.id}</TableCell>
                                            <TableCell>${transaction.amount}</TableCell>
                                            <TableCell>{transaction.gateway}</TableCell>
                                            <TableCell>
                                                <Badge className={
                                                    transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                    transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }>
                                                    {transaction.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}