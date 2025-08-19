import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Megaphone, Plus, Calendar, Zap, TrendingUp, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin Dashboard', href: '/admin/dashboard' },
    { title: 'Marketing', href: '/admin/marketing' },
];

interface MarketingProps {
    campaigns: any[];
    flashSales: any[];
    promotions: any[];
}

export default function AdminMarketing({ campaigns, flashSales, promotions }: MarketingProps) {
    const mockCampaigns = [
        { id: 1, name: 'Summer Sale 2024', type: 'Email', status: 'active', reach: 15420, clicks: 1234, conversion: '8.2%' },
        { id: 2, name: 'New Product Launch', type: 'Social Media', status: 'scheduled', reach: 8500, clicks: 0, conversion: '0%' },
        { id: 3, name: 'Black Friday Prep', type: 'Banner', status: 'draft', reach: 0, clicks: 0, conversion: '0%' },
    ];

    const mockFlashSales = [
        { id: 1, name: 'Electronics Flash Sale', discount: '30%', products: 25, starts: '2024-01-20', ends: '2024-01-22', status: 'upcoming' },
        { id: 2, name: 'Fashion Weekend', discount: '25%', products: 45, starts: '2024-01-15', ends: '2024-01-17', status: 'active' },
        { id: 3, name: 'Home & Garden Sale', discount: '20%', products: 18, starts: '2024-01-10', ends: '2024-01-12', status: 'ended' },
    ];

    const mockPromotions = [
        { id: 1, code: 'WELCOME10', type: 'Percentage', value: '10%', usage: 234, limit: 1000, status: 'active' },
        { id: 2, code: 'FREESHIP', type: 'Free Shipping', value: '$0', usage: 567, limit: 500, status: 'active' },
        { id: 3, code: 'SAVE50', type: 'Fixed Amount', value: '$50', usage: 89, limit: 200, status: 'paused' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Marketing Management" />
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Marketing Management</h1>
                        <p className="text-gray-500">Create campaigns, flash sales, and promotional offers</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">
                            <Calendar className="mr-2 h-4 w-4" />
                            Schedule Campaign
                        </Button>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Create Campaign
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Active Campaigns</CardTitle>
                                <Megaphone className="h-4 w-4 text-blue-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12</div>
                            <p className="text-xs text-gray-500">Running campaigns</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Total Reach</CardTitle>
                                <Users className="h-4 w-4 text-green-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">45.2K</div>
                            <p className="text-xs text-gray-500">People reached</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Conversion Rate</CardTitle>
                                <TrendingUp className="h-4 w-4 text-purple-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">8.2%</div>
                            <p className="text-xs text-gray-500">Average conversion</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium text-gray-500">Flash Sales</CardTitle>
                                <Zap className="h-4 w-4 text-orange-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-gray-500">Active sales</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Marketing Campaigns</CardTitle>
                                    <CardDescription>Manage your marketing campaigns</CardDescription>
                                </div>
                                <Button size="sm">
                                    <Plus className="mr-2 h-4 w-4" />
                                    New Campaign
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Campaign</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Reach</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {mockCampaigns.map((campaign) => (
                                        <TableRow key={campaign.id}>
                                            <TableCell className="font-medium">{campaign.name}</TableCell>
                                            <TableCell>{campaign.type}</TableCell>
                                            <TableCell>{campaign.reach.toLocaleString()}</TableCell>
                                            <TableCell>
                                                <Badge className={
                                                    campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                                                    campaign.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-gray-100 text-gray-800'
                                                }>
                                                    {campaign.status}
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
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Flash Sales</CardTitle>
                                    <CardDescription>Time-limited promotional sales</CardDescription>
                                </div>
                                <Button size="sm">
                                    <Zap className="mr-2 h-4 w-4" />
                                    Create Flash Sale
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {mockFlashSales.map((sale) => (
                                    <div key={sale.id} className="p-4 border rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-medium">{sale.name}</h3>
                                            <Badge className={
                                                sale.status === 'active' ? 'bg-green-100 text-green-800' :
                                                sale.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                                                'bg-gray-100 text-gray-800'
                                            }>
                                                {sale.status}
                                            </Badge>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                                            <div>Discount: <span className="font-medium">{sale.discount}</span></div>
                                            <div>Products: <span className="font-medium">{sale.products}</span></div>
                                            <div>Starts: <span className="font-medium">{sale.starts}</span></div>
                                            <div>Ends: <span className="font-medium">{sale.ends}</span></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Promotional Codes</CardTitle>
                                <CardDescription>Manage discount codes and coupons</CardDescription>
                            </div>
                            <Button size="sm">
                                <Plus className="mr-2 h-4 w-4" />
                                Create Promo Code
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Code</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Value</TableHead>
                                    <TableHead>Usage</TableHead>
                                    <TableHead>Limit</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mockPromotions.map((promo) => (
                                    <TableRow key={promo.id}>
                                        <TableCell className="font-medium">{promo.code}</TableCell>
                                        <TableCell>{promo.type}</TableCell>
                                        <TableCell>{promo.value}</TableCell>
                                        <TableCell>{promo.usage}</TableCell>
                                        <TableCell>{promo.limit}</TableCell>
                                        <TableCell>
                                            <Badge className={promo.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                                                {promo.status}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}