
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MailIcon, PhoneIcon, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">اتصل بنا</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك. تواصل معنا وسنرد عليك في أقرب وقت ممكن.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-innova-purple to-innova-blue mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">تواصل معنا</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MailIcon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                  <a href="mailto:info@innova.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@innova.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">رقم الهاتف</h4>
                  <a href="tel:+971500000000" className="text-muted-foreground hover:text-primary transition-colors">
                    +971 50 000 0000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">العنوان</h4>
                  <p className="text-muted-foreground">
                    دبي، الإمارات العربية المتحدة
                    <br />
                    مركز الأعمال، الطابق 12
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم</Label>
                  <Input id="name" placeholder="الاسم الكامل" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input id="email" type="email" placeholder="البريد الإلكتروني" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">الموضوع</Label>
                <Input id="subject" placeholder="موضوع الرسالة" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">الرسالة</Label>
                <Textarea id="message" placeholder="اكتب رسالتك هنا..." rows={6} />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-innova-purple to-innova-blue hover:opacity-90 transition-opacity">
                إرسال الرسالة
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
