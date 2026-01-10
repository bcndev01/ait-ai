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
    question: "What is AceIt AI?",
    answer: "AceIt AI is an all-in-one AI-powered study companion app designed to help students ace their exams. It combines intelligent tools like AI Tutor, Quiz Generator, Smart Flashcards, Study Notes, Mind Maps, and interactive 3D models to make studying more effective and engaging."
  },
  {
    id: '2',
    question: "Who is AceIt AI for?",
    answer: "AceIt AI is designed for students of all levels - high school, college, university, and lifelong learners. Whether you're preparing for exams, studying daily assignments, or exploring new subjects, AceIt AI has tools to help you succeed."
  },
  {
    id: '3',
    question: "What devices are supported?",
    answer: "AceIt AI is available for iPhone and iPad running iOS 16 or later."
  },
  {
    id: '4',
    question: "Is AceIt AI available in my language?",
    answer: "Currently, AceIt AI supports English, Turkish, German, French, Spanish, and Arabic. We're working on adding more languages."
  },
  {
    id: '5',
    question: "Do I need an internet connection to use AceIt AI?",
    answer: "Yes, an internet connection is required for AI-powered features like AI Tutor, Quiz Generator, and Study Notes. However, you can access previously saved flashcards and content offline."
  },
  {
    id: '6',
    question: "What is AI Tutor?",
    answer: "AI Tutor is your 24/7 personal study assistant. Ask any academic question and get instant, detailed explanations. It's like having a tutor available whenever you need help."
  },
  {
    id: '7',
    question: "How does the Quiz Generator work?",
    answer: "Simply enter a topic, select your preferred difficulty level (Easy, Medium, Hard) and question types (Multiple Choice, True/False, Fill-in-the-Blank), and AI will generate a customized practice quiz for you."
  },
  {
    id: '8',
    question: "What are Smart Flashcards?",
    answer: "Create flashcard decks manually or let AI generate them for you. Our spaced repetition algorithm helps you review cards at optimal intervals to maximize retention."
  },
  {
    id: '9',
    question: "How do AI Study Notes work?",
    answer: "Enter any topic and AI generates comprehensive study notes including key concepts, explanations, mnemonics, exam tips, and common mistakes to avoid. You can also export notes as PDF."
  },
  {
    id: '10',
    question: "What is Mind Map Generator?",
    answer: "Mind Map Generator creates visual concept maps that show relationships between ideas. It's perfect for visual learners who want to see how topics connect."
  },
  {
    id: '11',
    question: "What is the 3D Educational Playground?",
    answer: "Explore 100+ interactive 3D models covering human anatomy, biology, chemistry, and physics. Rotate, zoom, and tap on hotspots to learn about each structure."
  },
  {
    id: '12',
    question: "How does the Smart Scanner work?",
    answer: "Use your camera to scan textbook pages, handwritten notes, or any document. The app extracts the text and lets you generate quizzes, flashcards, or study notes from the scanned content."
  },
  {
    id: '13',
    question: "What is Question Solver?",
    answer: "Stuck on a problem? Type or scan your question and get step-by-step solutions with detailed explanations to help you understand the process."
  },
  {
    id: '14',
    question: "What subjects does AceIt AI cover?",
    answer: "AceIt AI can help with virtually any academic subject including Math, Science, Biology, Chemistry, Physics, History, Geography, Literature, Languages, and more."
  }
];
