
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Compare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HostingComparison: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-brightPurple bg-clip-text text-transparent">
              {t('comparison.title') || 'مقارنة خدمات الاستضافة'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('comparison.subtitle') || 'تعرف على الفرق بين أنواع الاستضافة واختر الأفضل لمشروعك'}
            </p>
          </div>

          {/* Hosting Types Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-innova-lightBlue" />
                  {t('comparison.shared.title') || 'الاستضافة المشتركة'}
                </CardTitle>
                <CardDescription>
                  {t('comparison.shared.subtitle') || 'الخيار الأمثل للمواقع الصغيرة والمتوسطة'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {t('comparison.shared.description') || 'الاستضافة المشتركة هي خدمة تستضيف فيها مواقع متعددة على خادم واحد، مما يجعلها اقتصادية وسهلة الاستخدام للشركات الصغيرة والمدونات والمواقع الشخصية التي لا تتطلب موارد كبيرة.'}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-innova-violet" />
                  {t('comparison.vps.title') || 'الخادم الافتراضي الخاص (VPS)'}
                </CardTitle>
                <CardDescription>
                  {t('comparison.vps.subtitle') || 'للمواقع المتوسطة والمتنامية'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {t('comparison.vps.description') || 'الخادم الافتراضي الخاص (VPS) يوفر بيئة استضافة مخصصة ضمن خادم فعلي، مما يمنح موقعك موارد مخصصة وأداءً أفضل وتحكمًا أكبر في الإعدادات مع الحفاظ على تكلفة معقولة.'}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-innova-brightPurple" />
                  {t('comparison.dedicated.title') || 'الخادم المخصص'}
                </CardTitle>
                <CardDescription>
                  {t('comparison.dedicated.subtitle') || 'للمشاريع الضخمة وعالية الأداء'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {t('comparison.dedicated.description') || 'الخادم المخصص يوفر جهازًا كاملًا مخصصًا لموقعك أو تطبيقك فقط، مما يضمن أعلى مستويات الأداء والأمان والتخصيص. مثالي للمواقع ذات الزيارات العالية والتطبيقات المعقدة.'}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table Section */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Compare className="h-6 w-6 text-innova-lightBlue" />
              <h2 className="text-2xl font-bold">
                {t('comparison.tableTitle') || 'مقارنة بين أنواع الاستضافة'}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">{t('comparison.table.feature') || 'الميزة'}</TableHead>
                    <TableHead>{t('comparison.table.shared') || 'الاستضافة المشتركة'}</TableHead>
                    <TableHead>{t('comparison.table.vps') || 'الخادم الافتراضي الخاص'}</TableHead>
                    <TableHead>{t('comparison.table.dedicated') || 'الخادم المخصص'}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">{t('comparison.table.cost') || 'التكلفة'}</TableCell>
                    <TableCell>{t('comparison.table.costShared') || 'منخفضة ($5-20/شهر)'}</TableCell>
                    <TableCell>{t('comparison.table.costVPS') || 'متوسطة ($20-100/شهر)'}</TableCell>
                    <TableCell>{t('comparison.table.costDedicated') || 'مرتفعة ($100-1000+/شهر)'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t('comparison.table.resources') || 'الموارد'}</TableCell>
                    <TableCell>{t('comparison.table.resourcesShared') || 'مشتركة ومحدودة'}</TableCell>
                    <TableCell>{t('comparison.table.resourcesVPS') || 'مخصصة ومضمونة'}</TableCell>
                    <TableCell>{t('comparison.table.resourcesDedicated') || 'مخصصة بالكامل'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t('comparison.table.performance') || 'الأداء'}</TableCell>
                    <TableCell>{t('comparison.table.performanceShared') || 'جيد للمواقع الصغيرة'}</TableCell>
                    <TableCell>{t('comparison.table.performanceVPS') || 'ممتاز للمواقع المتوسطة'}</TableCell>
                    <TableCell>{t('comparison.table.performanceDedicated') || 'الأفضل للمواقع الكبيرة'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t('comparison.table.security') || 'الأمان'}</TableCell>
                    <TableCell>{t('comparison.table.securityShared') || 'أساسي'}</TableCell>
                    <TableCell>{t('comparison.table.securityVPS') || 'متقدم'}</TableCell>
                    <TableCell>{t('comparison.table.securityDedicated') || 'عالي جدًا'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t('comparison.table.control') || 'التحكم'}</TableCell>
                    <TableCell>{t('comparison.table.controlShared') || 'محدود'}</TableCell>
                    <TableCell>{t('comparison.table.controlVPS') || 'متقدم (root access)'}</TableCell>
                    <TableCell>{t('comparison.table.controlDedicated') || 'كامل'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t('comparison.table.scalability') || 'قابلية التوسع'}</TableCell>
                    <TableCell>{t('comparison.table.scalabilityShared') || 'محدودة'}</TableCell>
                    <TableCell>{t('comparison.table.scalabilityVPS') || 'مرنة'}</TableCell>
                    <TableCell>{t('comparison.table.scalabilityDedicated') || 'عالية جدًا'}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t('comparison.table.suitable') || 'مناسب لـ'}</TableCell>
                    <TableCell>{t('comparison.table.suitableShared') || 'المواقع الشخصية، المدونات، الشركات الناشئة'}</TableCell>
                    <TableCell>{t('comparison.table.suitableVPS') || 'المواقع المتوسطة، المتاجر الإلكترونية، الشركات المتنامية'}</TableCell>
                    <TableCell>{t('comparison.table.suitableDedicated') || 'المواقع الكبيرة، التطبيقات المعقدة، المنصات عالية الزيارات'}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t('comparison.cta.title') || 'جاهز لاختيار الاستضافة المناسبة؟'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t('comparison.cta.text') || 'اتصل بنا اليوم للحصول على استشارة مجانية واختيار الحل المناسب لاحتياجات موقعك'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-violet hover:opacity-90 transition-opacity">
                {t('comparison.cta.primary') || 'تواصل معنا الآن'}
                {dir === 'rtl' ? null : <ArrowRight className="ms-2 h-4 w-4" />}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/pricing">
                  {t('comparison.cta.secondary') || 'استعرض الباقات'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HostingComparison;
