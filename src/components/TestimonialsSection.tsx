
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: language === 'ar' ? 'أحمد علي' : 'Ahmed Ali',
      role: language === 'ar' ? 'المؤسس والرئيس التنفيذي' : 'Founder & CEO',
      company: 'Tech Solutions',
      content: language === 'ar' 
        ? 'استضافة إنوفا غيرت الطريقة التي يعمل بها موقعنا. السرعة مذهلة والدعم الفني ممتاز. أنصح بها بشدة لأي شركة تبحث عن استضافة موثوقة.'
        : 'INNOVA hosting changed the way our website works. The speed is amazing and the technical support is excellent. I highly recommend it to any company looking for reliable hosting.',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5
    },
    {
      id: 2,
      name: language === 'ar' ? 'سارة محمد' : 'Sara Mohamed',
      role: language === 'ar' ? 'مديرة التسويق' : 'Marketing Manager',
      company: 'Creative Agency',
      content: language === 'ar'
        ? 'سرعة تحميل موقعنا تحسنت بشكل كبير منذ انتقالنا إلى استضافة إنوفا. خدمة العملاء ممتازة وفريق الدعم الفني دائماً متواجد للمساعدة.'
        : 'Our website loading speed has improved significantly since we moved to INNOVA hosting. Customer service is excellent and the support team is always available to help.',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5
    },
    {
      id: 3,
      name: language === 'ar' ? 'محمد خالد' : 'Mohamed Khalid',
      role: language === 'ar' ? 'مهندس برمجيات' : 'Software Engineer',
      company: 'Dev Solutions',
      content: language === 'ar'
        ? 'البنية التحتية لاستضافة إنوفا قوية جداً، وخياراتهم للتخصيص تناسب احتياجاتنا المختلفة. الدعم الفني سريع الاستجابة ودائماً مفيد.'
        : 'INNOVA\'s hosting infrastructure is very robust, and their customization options suit our diverse needs. Technical support is responsive and always helpful.',
      avatar: 'https://i.pravatar.cc/150?img=3',
      rating: 4
    },
    {
      id: 4,
      name: language === 'ar' ? 'نورة عبدالله' : 'Noura Abdullah',
      role: language === 'ar' ? 'مديرة العمليات' : 'Operations Manager',
      company: 'Online Store',
      content: language === 'ar'
        ? 'انتقلنا من مزود استضافة آخر إلى إنوفا وكانت النقلة سلسة تماماً. أداء موقعنا أصبح أفضل بكثير، ونظام النسخ الاحتياطي المنتظم يعطينا راحة البال.'
        : 'We switched from another hosting provider to INNOVA and the transition was completely smooth. Our site performance is much better now, and the regular backup system gives us peace of mind.',
      avatar: 'https://i.pravatar.cc/150?img=10',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('testimonials.subtitle')}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-innova-purple to-innova-blue mx-auto mt-4"></div>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 flex-grow">{testimonial.content}</p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative -translate-y-0 static" />
            <CarouselNext className="relative -translate-y-0 static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
