import {
  ScanLine,
  BrainCircuit,
  Headphones,
  Sparkles,
  Dna,
  Clock,
  Library,
  Trophy
} from 'lucide-react';
import { Feature, Testimonial, FAQItem } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'scanner',
    title: 'Smart Scanner',
    description: 'Snap your handwritten notes. We digitize them instantly into quizzes.',
    icon: ScanLine,
    color: 'from-pink-500 to-rose-500',
    size: 'large',
    image: '/smart_scanner_icon.png'
  },
  {
    id: 'mindmap',
    title: 'AI Mind Map',
    description: 'Visual learners rejoice. Turn any topic into a living, breathing map.',
    icon: BrainCircuit,
    color: 'from-violet-500 to-purple-500',
    size: 'small'
  },
  {
    id: 'voice',
    title: 'Voice Explainer',
    description: 'Point at a textbook. AI teaches you in a natural voice.',
    icon: Headphones,
    color: 'from-blue-500 to-cyan-500',
    size: 'small'
  },
  {
    id: 'notes',
    title: 'AI Study Notes',
    description: 'Mnemonics, common mistakes, and exam strategies generated instantly.',
    icon: Sparkles,
    color: 'from-amber-400 to-orange-500',
    size: 'small'
  },
  {
    id: 'quiz',
    title: 'Quiz Generator',
    description: 'MCQ, T/F, Fill-in. 3 difficulties. Instant feedback.',
    icon: Dna,
    color: 'from-emerald-400 to-green-500',
    size: 'small'
  },
  {
    id: 'spaced',
    title: 'Spaced Repetition',
    description: 'Never forget a concept again with smart scheduling.',
    icon: Clock,
    color: 'from-indigo-400 to-blue-600',
    size: 'large'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Pre-Med Student @ Stanford',
    quote: "I was drowning in anatomy notes. AceIt's mind maps literally saved my GPA. It's like having a genius tutor in my pocket.",
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    rating: 5
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'History Major @ Oxford',
    quote: "The voice explainer feature is insane. I just point my phone at the textbook and it explains complex events like a podcast.",
    avatar: 'https://picsum.photos/seed/marcus/100/100',
    rating: 5
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'High School Senior',
    quote: "The gamification makes studying actually... fun? I never thought I'd say that. Currently level 7 and addicted to the streaks.",
    avatar: 'https://picsum.photos/seed/elena/100/100',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: "How accurate is the handwriting recognition?",
    answer: "Our Smart Scanner uses advanced OCR technology with a 98% accuracy rate, even on messy handwriting. It understands diagrams too!"
  },
  {
    id: '2',
    question: "Can I use it offline?",
    answer: "Yes! Your library and previously generated content are available offline. You only need internet for generating new AI content."
  },
  {
    id: '3',
    question: "Is there a limit to how many quizzes I can make?",
    answer: "Free users get 5 quizzes per day. AceIt Pro users get unlimited generation and access to the advanced Voice Explainer models."
  },
  {
    id: '4',
    question: "Does it work for math and science?",
    answer: "Absolutely. We support LaTeX rendering for math equations and have specialized models for chemistry and physics problem solving."
  }
];
