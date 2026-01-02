import { motion, useScroll, useTransform } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'rotate';
  duration?: number;
  className?: string;
}

export function AnimatedSection({ 
  children, 
  delay = 0, 
  direction = 'up',
  duration = 0.8,
  className = ''
}: AnimatedSectionProps) {
  
  // تحديد اتجاه الحركة مع تأثيرات أقوى
  const directions = {
    up: { y: 80, x: 0, rotate: 0, scale: 1 },
    down: { y: -80, x: 0, rotate: 0, scale: 1 },
    left: { y: 0, x: 100, rotate: 0, scale: 1 },
    right: { y: 0, x: -100, rotate: 0, scale: 1 },
    fade: { y: 0, x: 0, rotate: 0, scale: 1 },
    scale: { y: 0, x: 0, rotate: 0, scale: 0.7 },
    rotate: { y: 0, x: 0, rotate: -10, scale: 0.9 }
  };

  const initial = {
    opacity: 0,
    ...directions[direction]
  };

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 0,
    scale: 1
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // تأثير cubic-bezier قوي
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// مكون للعناصر التي تظهر واحدة تلو الأخرى
export function StaggeredChildren({ 
  children, 
  staggerDelay = 0.15,
  className = ''
}: { 
  children: ReactNode; 
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// مكون لعناصر القائمة
export function StaggeredItem({ 
  children,
  direction = 'up',
  className = ''
}: { 
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}) {
  const directions = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 }
  };

  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0,
          scale: 0.9,
          ...directions[direction]
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// مكون للأرقام الصاعدة (Counter Animation)
export function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 2,
  suffix = '',
  className = ''
}: { 
  from?: number; 
  to: number; 
  duration?: number;
  suffix?: string;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <motion.span
        initial={{ textContent: from }}
        whileInView={{ textContent: to }}
        viewport={{ once: true }}
        transition={{
          duration,
          ease: 'easeOut'
        }}
        onUpdate={(latest) => {
          // تحديث الرقم تدريجياً
          if (typeof latest.textContent === 'number') {
            return Math.floor(latest.textContent).toString();
          }
        }}
      >
        {from}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

// مكون لتأثير Scale عند الظهور
export function ScaleIn({ 
  children,
  delay = 0,
  className = ''
}: { 
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// مكون جديد: Parallax Effect
export function ParallaxSection({ 
  children,
  speed = 50,
  className = ''
}: { 
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// مكون جديد: Reveal Effect (ستارة من الأسفل)
export function RevealSection({ 
  children,
  delay = 0,
  className = ''
}: { 
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

// مكون جديد: تأثير البطاقة المقلوبة
export function FlipCard({ 
  children,
  delay = 0,
  className = ''
}: { 
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        rotateX: -90,
        transformPerspective: 1000
      }}
      whileInView={{ 
        opacity: 1, 
        rotateX: 0 
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// مكون جديد: تأثير الموجة
export function WaveSection({ 
  children,
  delay = 0,
  className = ''
}: { 
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        x: -100,
        skewX: 10
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        skewX: 0
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// مكون جديد: تأثير Blur Fade
export function BlurFade({ 
  children,
  delay = 0,
  className = ''
}: { 
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        filter: 'blur(10px)'
      }}
      whileInView={{ 
        opacity: 1,
        filter: 'blur(0px)'
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// مكون جديد: تأثير Zoom In
export function ZoomIn({ 
  children,
  delay = 0,
  className = ''
}: { 
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0.3
      }}
      whileInView={{ 
        opacity: 1,
        scale: 1
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.34, 1.56, 0.64, 1] // spring effect
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// مكون لتأثير Slide مع Fade
export function SlideInFade({ 
  children,
  direction = 'left',
  delay = 0,
  className = ''
}: { 
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: direction === 'left' ? -80 : 80 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0 
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}