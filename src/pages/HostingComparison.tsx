import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, List, Check, X, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HostingComparison: React.FC = () => {
  const { t, dir, language } = useLanguage();

  // Custom translation function for this page that falls back to English/Arabic
  const hostingT = (key: string, arFallback: string, enFallback: string): string => {
    const translatedText = t(key);
    if (translatedText === key) {
      return language === 'ar' ? arFallback : enFallback;
    }
    return translatedText;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-brightPurple bg-clip-text text-transparent">
              {hostingT('comparison.title', 'مقارنة خدمات الاستضافة', 'Web Hosting Comparison')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {hostingT('comparison.subtitle', 
                'تعرف على الفرق بين أنواع الاستضافة واختر الأفضل لمشروعك',
                'Understand the differences between hosting types and choose the best for your project')}
            </p>
            <div className="max-w-3xl mx-auto p-4 md:p-6 bg-muted/50 rounded-lg border border-muted">
              <p className="text-sm md:text-base italic">
                {hostingT('comparison.quote', 
                  'اختيار استضافة الويب المناسبة هو أحد أهم القرارات التي ستتخذها لموقعك. يؤثر هذا القرار مباشرة على أداء موقعك وأمانه وقدرته على النمو.',
                  'Choosing the right web hosting is one of the most important decisions you\'ll make for your website. This decision directly affects your site\'s performance, security, and ability to grow.')}
              </p>
            </div>
          </div>

          {/* Hosting Types Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-all group border-transparent hover:border-innova-lightBlue overflow-hidden">
              <div className="h-2 bg-innova-lightBlue w-full"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-innova-lightBlue" />
                  {hostingT('comparison.shared.title', 'الاستضافة المشتركة', 'Shared Hosting')}
                </CardTitle>
                <CardDescription>
                  {hostingT('comparison.shared.subtitle', 'الخيار الأمثل للمواقع الصغيرة والمتوسطة', 'Best for small to medium websites')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  {hostingT('comparison.shared.description', 
                    'الاستضافة المشتركة هي خدمة تستضيف فيها مواقع متعددة على خادم واحد، مما يجعلها اقتصادية وسهلة الاستخدام للشركات الصغيرة والمدونات والمواقع الشخصية التي لا تتطلب موارد كبيرة.',
                    'Shared hosting is a service where multiple websites are hosted on a single server, making it economical and easy to use for small businesses, blogs, and personal websites that don\'t require extensive resources.')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{hostingT('comparison.shared.pro1', 'اقتصادية وبأسعار معقولة', 'Economical and affordable')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{hostingT('comparison.shared.pro2', 'سهلة الاستخدام والإدارة', 'Easy to use and manage')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5" />
                    <span>{hostingT('comparison.shared.con1', 'أداء أقل في أوقات الذروة', 'Lower performance during peak times')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all group border-transparent hover:border-innova-violet overflow-hidden">
              <div className="h-2 bg-innova-violet w-full"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-innova-violet" />
                  {hostingT('comparison.vps.title', 'الخادم الافتراضي الخاص (VPS)', 'Virtual Private Server (VPS)')}
                </CardTitle>
                <CardDescription>
                  {hostingT('comparison.vps.subtitle', 'للمواقع المتوسطة والمتنامية', 'For medium and growing websites')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  {hostingT('comparison.vps.description', 
                    'الخادم الافتراضي الخاص (VPS) يوفر بيئة استضافة مخصصة ضمن خادم فعلي، مما يمنح موقعك موارد مخصصة وأداءً أفضل وتحكمًا أكبر في الإعدادات مع الحفاظ على تكلفة معقولة.',
                    'A Virtual Private Server (VPS) provides a dedicated hosting environment within a physical server, giving your site dedicated resources, better performance, and greater control over settings while maintaining reasonable cost.')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{hostingT('comparison.vps.pro1', 'موارد مخصصة وأداء أفضل', 'Dedicated resources and better performance')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{hostingT('comparison.vps.pro2', 'تحكم أكبر في الإعدادات', 'Greater control over settings')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5" />
                    <span>{hostingT('comparison.vps.con1', 'تتطلب معرفة تقنية أكبر', 'Requires more technical knowledge')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all group border-transparent hover:border-innova-brightPurple overflow-hidden">
              <div className="h-2 bg-innova-brightPurple w-full"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-innova-brightPurple" />
                  {hostingT('comparison.dedicated.title', 'الخادم المخصص', 'Dedicated Server')}
                </CardTitle>
                <CardDescription>
                  {hostingT('comparison.dedicated.subtitle', 'للمشاريع الضخمة وعالية الأداء', 'For large, high-performance projects')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  {hostingT('comparison.dedicated.description', 
                    'الخادم المخصص يوفر جهازًا كاملًا مخصصًا لموقعك أو تطبيقك فقط، مما يضمن أعلى مستويات الأداء والأمان والتخصيص. مثالي للمواقع ذات الزيارات العالية والتطبيقات المعقدة.',
                    'A dedicated server provides an entire machine exclusively for your website or application, ensuring the highest levels of performance, security, and customization. Ideal for high-traffic websites and complex applications.')}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{hostingT('comparison.dedicated.pro1', 'أعلى مستويات الأداء والأمان', 'Highest levels of performance and security')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{hostingT('comparison.dedicated.pro2', 'تخصيص كامل للإعدادات', 'Full customization of settings')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-0.5" />
                    <span>{hostingT('comparison.dedicated.con1', 'تكلفة مرتفعة وتتطلب خبرة تقنية عالية', 'High cost and requires technical expertise')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table Section */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <List className="h-6 w-6 text-innova-lightBlue" />
              <h2 className="text-2xl font-bold">
                {hostingT('comparison.tableTitle', 'مقارنة بين أنواع الاستضافة', 'Hosting Types Comparison')}
              </h2>
            </div>
            
            <div className="overflow-x-auto rounded-lg border border-muted">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead className="w-[200px] font-semibold">
                      {hostingT('comparison.table.feature', 'الميزة', 'Feature')}
                    </TableHead>
                    <TableHead className="font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Server className="h-4 w-4 text-innova-lightBlue" />
                        {hostingT('comparison.table.shared', 'الاستضافة المشتركة', 'Shared Hosting')}
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Server className="h-4 w-4 text-innova-violet" />
                        {hostingT('comparison.table.vps', 'الخادم الافتراضي الخاص', 'VPS Hosting')}
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Server className="h-4 w-4 text-innova-brightPurple" />
                        {hostingT('comparison.table.dedicated', 'الخادم المخصص', 'Dedicated Server')}
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20">
                      {hostingT('comparison.table.cost', 'التكلفة', 'Cost')}
                    </TableCell>
                    <TableCell>
                      <span className="block font-semibold text-innova-lightBlue mb-1">
                        {hostingT('comparison.table.costShared.value', 'منخفضة', 'Low')}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {hostingT('comparison.table.costShared', '5-20 دولار/شهر', '$5-20/month')}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="block font-semibold text-innova-violet mb-1">
                        {hostingT('comparison.table.costVPS.value', 'متوسطة', 'Medium')}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {hostingT('comparison.table.costVPS', '20-100 دولار/شهر', '$20-100/month')}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="block font-semibold text-innova-brightPurple mb-1">
                        {hostingT('comparison.table.costDedicated.value', 'مرتفعة', 'High')}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {hostingT('comparison.table.costDedicated', '100-1000+ دولار/شهر', '$100-1000+/month')}
                      </span>
                    </TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20">
                      {hostingT('comparison.table.resources', 'الموارد', 'Resources')}
                    </TableCell>
                    <TableCell>
                      {hostingT('comparison.table.resourcesShared', 'مشتركة ومحدودة', 'Shared and limited')}
                    </TableCell>
                    <TableCell>
                      {hostingT('comparison.table.resourcesVPS', 'مخصصة ومضمونة', 'Dedicated and guaranteed')}
                    </TableCell>
                    <TableCell>
                      {hostingT('comparison.table.resourcesDedicated', 'مخصصة بالكامل', 'Fully dedicated')}
                    </TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20">
                      {hostingT('comparison.table.performance', 'الأداء', 'Performance')}
                    </TableCell>
                    <TableCell className="relative">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      {hostingT('comparison.table.performanceShared', 'جيد للمواقع الصغيرة', 'Good for small websites')}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      {hostingT('comparison.table.performanceVPS', 'ممتاز للمواقع المتوسطة', 'Excellent for medium websites')}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      {hostingT('comparison.table.performanceDedicated', 'الأفضل للمواقع الكبيرة', 'Best for large websites')}
                    </TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20">
                      {hostingT('comparison.table.security', 'الأمان', 'Security')}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      {hostingT('comparison.table.securityShared', 'أساسي', 'Basic')}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      {hostingT('comparison.table.securityVPS', 'متقدم', 'Advanced')}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      {hostingT('comparison.table.securityDedicated', 'عالي جدًا', 'Very high')}
                    </TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20">
                      {hostingT('comparison.table.control', 'التحكم', 'Control')}
                    </TableCell>
                    <TableCell>
                      {hostingT('comparison.table.controlShared', 'محدود', 'Limited')}
                    </TableCell>
                    <TableCell>
                      {hostingT('comparison.table.controlVPS', 'متقدم (صلاحيات الجذر)', 'Advanced (root access)')}
                    </TableCell>
                    <TableCell>
                      {hostingT('comparison.table.controlDedicated', 'كامل', 'Full')}
                    </TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20">
                      {hostingT('comparison.table.scalability', 'قابلية التوسع', 'Scalability')}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      {hostingT('comparison.table.scalabilityShared', 'محدودة', 'Limited')}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                        <div className="w-2 h-2 rounded-full bg-muted"></div>
                      </div>
                      {hostingT('comparison.table.scalabilityVPS', 'مرنة', 'Flexible')}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      {hostingT('comparison.table.scalabilityDedicated', 'عالية جدًا', 'Very high')}
                    </TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell className="font-medium bg-muted/20">
                      {hostingT('comparison.table.suitable', 'مناسب لـ', 'Suitable for')}
                    </TableCell>
                    <TableCell>
                      {hostingT('comparison.table.suitableShared', 'المواقع الشخصية، المدونات، الشركات الناشئة', 'Personal websites, blogs, startups')}
                    </TableCell>
                    <TableCell>
                      {hostingT('comparison.table.suitableVPS', 'المواقع المتوسطة، المتاجر الإلكترونية، الشركات المتنامية', 'Medium websites, e-commerce, growing businesses')}
                    </TableCell>
                    <TableCell>
                      {hostingT('comparison.table.suitableDedicated', 'المواقع الكبيرة، التطبيقات المعقدة، المنصات عالية الزيارات', 'Large websites, complex applications, high-traffic platforms')}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          
          {/* Explanation Section */}
          <div className="mb-16 grid md:grid-cols-2 gap-8">
            <div className="bg-muted/30 p-6 rounded-lg border border-muted">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-innova-lightBlue" />
                {hostingT('comparison.whyChoose.title', 'كيف تختار استضافة الويب المناسبة؟', 'How to Choose the Right Web Hosting?')}
              </h3>
              <div className="space-y-4">
                <p>
                  {hostingT('comparison.whyChoose.p1', 
                    'اختيار استضافة الويب المناسبة يعتمد على عدة عوامل منها حجم موقعك، عدد الزيارات المتوقعة، ميزانيتك، ومستوى الخبرة التقنية لديك.',
                    'Choosing the right web hosting depends on several factors including your site size, expected traffic, budget, and your technical expertise level.')}
                </p>
                <p>
                  {hostingT('comparison.whyChoose.p2', 
                    'للمواقع الصغيرة والمبتدئين، الاستضافة المشتركة هي خيار ممتاز بسبب تكلفتها المنخفضة وسهولة استخدامها.',
                    'For small websites and beginners, shared hosting is an excellent option due to its low cost and ease of use.')}
                </p>
                <p>
                  {hostingT('comparison.whyChoose.p3', 
                    'إذا كان موقعك ينمو وتحتاج إلى أداء أفضل، فقد يكون الخادم الافتراضي الخاص (VPS) هو الخيار المناسب.',
                    'If your site is growing and you need better performance, a Virtual Private Server (VPS) might be the right choice.')}
                </p>
                <p>
                  {hostingT('comparison.whyChoose.p4', 
                    'للمواقع الكبيرة والتطبيقات المعقدة، الخادم المخصص يوفر أعلى مستويات الأداء والتحكم.',
                    'For large websites and complex applications, a dedicated server provides the highest levels of performance and control.')}
                </p>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border border-muted">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-innova-violet" />
                {hostingT('comparison.ourRecommendation.title', 'توصياتنا', 'Our Recommendations')}
              </h3>
              <div className="space-y-4">
                <p>
                  {hostingT('comparison.ourRecommendation.p1', 
                    'إذا كنت مبتدئًا أو تمتلك موقعًا صغيرًا بعدد زيارات محدود، ابدأ بالاستضافة المشتركة.',
                    'If you\'re a beginner or have a small website with limited traffic, start with shared hosting.')}
                </p>
                <p>
                  {hostingT('comparison.ourRecommendation.p2', 
                    'إذا كان موقعك يستقبل المزيد من الزيارات أو تحتاج إلى مزيد من التحكم، انتقل إلى VPS.',
                    'If your website receives more traffic or you need more control, upgrade to a VPS.')}
                </p>
                <p>
                  {hostingT('comparison.ourRecommendation.p3', 
                    'للمشاريع الكبيرة والمواقع ذات الزيارات العالية، الخادم المخصص هو الخيار الأمثل.',
                    'For large projects and high-traffic websites, a dedicated server is the optimal choice.')}
                </p>
                <p>
                  {hostingT('comparison.ourRecommendation.p4', 
                    'تذكر دائمًا أنه يمكنك الترقية من نوع استضافة إلى آخر مع نمو موقعك وزيادة متطلباتك.',
                    'Always remember that you can upgrade from one hosting type to another as your site grows and your requirements increase.')}
                </p>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              {hostingT('comparison.faq.title', 'الأسئلة الشائعة حول خدمات الاستضافة', 'Frequently Asked Questions about Hosting Services')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-muted">
                <h3 className="font-semibold mb-2">
                  {hostingT('comparison.faq.q1', 'ما هو الفرق الرئيسي بين أنواع الاستضافة؟', 'What is the main difference between hosting types?')}
                </h3>
                <p className="text-muted-foreground">
                  {hostingT('comparison.faq.a1', 
                    'الفرق الرئيسي هو مستوى الموارد المخصصة، التحكم، والأداء. الاستضافة المشتركة تشارك الموارد مع مواقع أخرى، بينما VPS يوفر موارد مخصصة، والخادم المخصص يوفر جهازًا كاملًا لموقعك فقط.',
                    'The main difference is the level of dedicated resources, control, and performance. Shared hosting shares resources with other sites, VPS provides dedicated resources, and dedicated servers offer an entire machine for your site only.')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-muted">
                <h3 className="font-semibold mb-2">
                  {hostingT('comparison.faq.q2', 'هل يمكنني الترقية من استضافة مشتركة إلى VPS أو خادم مخصص؟', 'Can I upgrade from shared hosting to VPS or dedicated server?')}
                </h3>
                <p className="text-muted-foreground">
                  {hostingT('comparison.faq.a2', 
                    'نعم، يمكنك الترقية بسهولة مع نمو موقعك. معظم مزودي الاستضافة يقدمون مسارًا سلسًا للترقية بدون انقطاع للخدمة.',
                    'Yes, you can easily upgrade as your site grows. Most hosting providers offer a smooth upgrade path without service interruption.')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-muted">
                <h3 className="font-semibold mb-2">
                  {hostingT('comparison.faq.q3', 'هل أحتاج إلى خبرة تقنية لإدارة VPS أو خادم مخصص؟', 'Do I need technical expertise to manage a VPS or dedicated server?')}
                </h3>
                <p className="text-muted-foreground">
                  {hostingT('comparison.faq.a3', 
                    'نعم، إدارة VPS أو خادم مخصص تتطلب بعض المعرفة التقنية. ومع ذلك، تقدم العديد من شركات الاستضافة خدمات إدارة تتولى الجوانب التقنية نيابة عنك.',
                    'Yes, managing a VPS or dedicated server requires some technical knowledge. However, many hosting companies offer managed services that handle the technical aspects for you.')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-muted">
                <h3 className="font-semibold mb-2">
                  {hostingT('comparison.faq.q4', 'كيف أعرف أن موقعي بحاجة للترقية من استضافة مشتركة؟', 'How do I know if my site needs to upgrade from shared hosting?')}
                </h3>
                <p className="text-muted-foreground">
                  {hostingT('comparison.faq.a4', 
                    'إذا لاحظت بطئًا في موقعك، أو تجاوزًا متكررًا لحدود الموارد، أو زيادة في حركة المرور، فقد يكون الوقت قد حان للترقية إلى خطة أعلى.',
                    'If you notice slowdowns on your site, frequent resource limit exceeded errors, or increasing traffic, it might be time to upgrade to a higher plan.')}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-innova-darkBlue/10 via-innova-lightBlue/10 to-innova-violet/10 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {hostingT('comparison.cta.title', 'جاهز لاختيار الاستضافة المناسبة؟', 'Ready to choose the right hosting?')}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {hostingT('comparison.cta.text', 
                'اتصل بنا اليوم للحصول على استشارة مجانية واختيار الحل المناسب لاحتياجات موقعك، مع ضمان الدعم الفني على مدار الساعة',
                'Contact us today for a free consultation and choose the right solution for your website needs, with 24/7 technical support guaranteed')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-innova-darkBlue via-innova-lightBlue to-innova-violet hover:opacity-90 transition-opacity">
                {hostingT('comparison.cta.primary', 'تواصل معنا الآن', 'Contact Us Now')}
                {dir === 'rtl' ? null : <ArrowRight className="ms-2 h-4 w-4" />}
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/pricing">
                  {hostingT('comparison.cta.secondary', 'استعرض الباقات', 'View Pricing Plans')}
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
