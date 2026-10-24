export interface SkillItem {
  id: string;
  name: string;
  category: 'languages' | 'frameworks-cloud' | 'tools-ai' | 'concepts';
  proficiency: number;
  highlight: string;
  color: string;
  glow: string;
  iconType: string;
  codeSnippet: string;
  snippetLang: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  period: string;
  stack: string[];
  summary: string;
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  accentColor: string;
  badge: string;
}

export interface EducationMilestone {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
  details: string[];
  type: 'education' | 'experience' | 'hackathon' | 'certification';
  commitHash: string;
}

export const RESUME_DATA = {
  personal: {
    name: "Joel Jose",
    title: "Aspiring Software Engineer",
    subtitle: "Final-year B.Tech CSE student passionate about AI-powered applications, full-stack software development, and mobile engineering.",
    email: "joeljose9212@gmail.com",
    phone: "+91 9207801787",
    location: "Kollam, Kerala, India",
    linkedin: "https://linkedin.com/in/joellljose",
    linkedinUsername: "joellljose",
    github: "https://github.com/joellljose",
    githubUsername: "joellljose",
    summary: `Final-year B.Tech Computer Science Engineering student with hands-on experience in Python, JavaScript, and Flutter through academic projects, including AI-powered applications built on the Google Gemini API. Strong interest in artificial intelligence, machine learning, software development, and cybersecurity, backed by solid problem-solving, teamwork, and communication skills. Seeking an opportunity as a Software Engineer to apply technical knowledge, contribute to real-world projects, and grow professionally.`,
    status: "Available for Software Engineering Roles & Opportunities",
    openToRoles: ["Software Engineer", "AI / Full-Stack Developer", "Flutter / Mobile Developer", "Graduate Engineer Trainee"],
  },

  stats: [
    { label: "Core Projects", value: "2+", change: "AI & Full-Stack", icon: "Code2" },
    { label: "Tech Stack", value: "16+", change: "Languages & Tools", icon: "Layers" },
    { label: "B.Tech CGPA", value: "7.88", change: "Computer Science", icon: "GraduationCap" },
    { label: "GenAI Hackathon", value: "24h", change: "National Level", icon: "Trophy" },
  ],

  skills: [
    // Languages
    {
      id: "python",
      name: "Python",
      category: "languages",
      proficiency: 92,
      highlight: "AI automation, backend scripts, Gemini integration, data processing",
      color: "#3776AB",
      glow: "rgba(55, 118, 171, 0.4)",
      iconType: "python",
      snippetLang: "python",
      codeSnippet: `import google.generativeai as genai

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel("gemini-1.5-pro")

async def analyze_ktu_syllabus(topic: str) -> str:
    prompt = f"Deconstruct KTU CSE module on {topic}. Provide notes & quiz."
    response = await model.generate_content_async(prompt)
    return response.text`,
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "languages",
      proficiency: 90,
      highlight: "Chrome Extension development, DOM MutationObserver, async event systems",
      color: "#F7DF1E",
      glow: "rgba(247, 223, 30, 0.4)",
      iconType: "javascript",
      snippetLang: "javascript",
      codeSnippet: `// Real-time Google Meet Caption De-duplication
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      const captionText = node.innerText?.trim();
      if (captionText && !transcriptSet.has(captionText)) {
        transcriptSet.add(captionText);
        appendCleanTranscript(captionText);
      }
    });
  });
});`,
    },
    {
      id: "dart",
      name: "Dart",
      category: "languages",
      proficiency: 88,
      highlight: "Cross-platform mobile apps, state management, asynchronous streams",
      color: "#0175C2",
      glow: "rgba(1, 117, 194, 0.4)",
      iconType: "dart",
      snippetLang: "dart",
      codeSnippet: `class KTUNoteModel {
  final String title;
  final String semester;
  final String geminiSummary;

  KTUNoteModel({required this.title, required this.semester, required this.geminiSummary});

  factory KTUNoteModel.fromFirestore(DocumentSnapshot doc) {
    final data = doc.data() as Map<String, dynamic>;
    return KTUNoteModel(
      title: data['title'] ?? '',
      semester: data['semester'] ?? 'S7',
      geminiSummary: data['geminiSummary'] ?? '',
    );
  }
}`,
    },
    {
      id: "cpp",
      name: "C++",
      category: "languages",
      proficiency: 84,
      highlight: "Object-oriented systems, high-efficiency algorithms & data structures",
      color: "#00599C",
      glow: "rgba(0, 89, 156, 0.4)",
      iconType: "cpp",
      snippetLang: "cpp",
      codeSnippet: `#include <iostream>
#include <vector>
#include <unordered_map>

template <typename T>
class LRUCache {
    int capacity;
    std::unordered_map<int, T> cache;
public:
    explicit LRUCache(int cap) : capacity(cap) {}
    void put(int key, T value) {
        // Fast O(1) hash map operations
        cache[key] = value;
    }
};`,
    },
    {
      id: "java",
      name: "Java",
      category: "languages",
      proficiency: 82,
      highlight: "Core OOP paradigms, multithreading, enterprise application structure",
      color: "#ED8B00",
      glow: "rgba(237, 139, 0, 0.4)",
      iconType: "java",
      snippetLang: "java",
      codeSnippet: `public class UniversityCourseManager {
    private final String courseCode;
    private final List<Student> enrolledStudents;

    public UniversityCourseManager(String code) {
        this.courseCode = code;
        this.enrolledStudents = new CopyOnWriteArrayList<>();
    }
    public synchronized void registerStudent(Student s) {
        enrolledStudents.add(s);
    }
}`,
    },
    {
      id: "c",
      name: "C",
      category: "languages",
      proficiency: 80,
      highlight: "Low-level memory management, pointers, POSIX system calls",
      color: "#A8B9CC",
      glow: "rgba(168, 185, 204, 0.4)",
      iconType: "c",
      snippetLang: "c",
      codeSnippet: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void insertHead(struct Node** head_ref, int new_data) {
    struct Node* new_node = (struct Node*) malloc(sizeof(struct Node));
    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}`,
    },
    {
      id: "php",
      name: "PHP",
      category: "languages",
      proficiency: 78,
      highlight: "Server-side scripting, REST endpoints, backend web services",
      color: "#777BB4",
      glow: "rgba(119, 123, 180, 0.4)",
      iconType: "php",
      snippetLang: "php",
      codeSnippet: `<?php
header('Content-Type: application/json');
require_once 'db_config.php';

$pdo = Database::getConnection();
$stmt = $pdo->prepare("SELECT * FROM resources WHERE subject = :sub");
$stmt->execute(['sub' => $_GET['subject'] ?? 'CS401']);
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
?>`,
    },
    {
      id: "sql",
      name: "SQL",
      category: "languages",
      proficiency: 86,
      highlight: "Relational database schema design, indexing, joins, stored procedures",
      color: "#336791",
      glow: "rgba(51, 103, 145, 0.4)",
      iconType: "sql",
      snippetLang: "sql",
      codeSnippet: `-- Schema for Student Learning Analytics
SELECT 
    s.student_id,
    s.name,
    COUNT(q.quiz_id) AS quizzes_completed,
    AVG(q.score) AS average_score
FROM students s
INNER JOIN quiz_attempts q ON s.student_id = q.student_id
WHERE q.completed_at >= NOW() - INTERVAL '30 DAYS'
GROUP BY s.student_id, s.name
HAVING AVG(q.score) >= 75.0;`,
    },
    {
      id: "html",
      name: "HTML5 / CSS3",
      category: "languages",
      proficiency: 90,
      highlight: "Semantic markup, modern responsive UI styling, accessibility standards",
      color: "#E34F26",
      glow: "rgba(227, 79, 38, 0.4)",
      iconType: "html",
      snippetLang: "html",
      codeSnippet: `<article class="ktu-course-card" role="region" aria-label="Course Module">
  <header class="flex items-center justify-between">
    <h3 class="text-xl font-bold">Compiler Design (CS304)</h3>
    <span class="badge-status">Active KTU Syllabus</span>
  </header>
  <div class="content-preview">Live Gemini Doubt Solver Ready</div>
</article>`,
    },

    // Frameworks & Cloud
    {
      id: "gemini",
      name: "Google Gemini API",
      category: "tools-ai",
      proficiency: 95,
      highlight: "Multimodal AI, semantic doubt resolution, automated summarization, meeting intelligence",
      color: "#4E75F8",
      glow: "rgba(78, 117, 248, 0.6)",
      iconType: "gemini",
      snippetLang: "javascript",
      codeSnippet: `// MeetMash Gemini Action-Item Extraction
const prompt = \`
Analyze this live transcript:
"\${cleanTranscript}"
Extract:
1. Executive Summary
2. Action Items with Owner & Deadlines
3. High Priority Questions
Format as clean structured Markdown.
\`;
const result = await geminiModel.generateContent(prompt);`,
    },
    {
      id: "flutter",
      name: "Flutter",
      category: "frameworks-cloud",
      proficiency: 90,
      highlight: "Cross-platform iOS/Android development, reactive state management, custom UI widgets",
      color: "#02569B",
      glow: "rgba(2, 86, 155, 0.5)",
      iconType: "flutter",
      snippetLang: "dart",
      codeSnippet: `class KTUDoubtSolverWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocConsumer<DoubtBloc, DoubtState>(
      listener: (context, state) => showSnackBarOnSuccess(context, state),
      builder: (context, state) {
        return Column(
          children: [
            AIResponseViewer(response: state.geminiExplanation),
            PromptInputBar(onSend: (text) => context.read<DoubtBloc>().add(AskQuestion(text))),
          ],
        );
      },
    );
  }
}`,
    },
    {
      id: "firebase",
      name: "Firebase",
      category: "frameworks-cloud",
      proficiency: 88,
      highlight: "Auth, Firestore NoSQL, Cloud Storage, Security Rules & RBAC",
      color: "#FFCA28",
      glow: "rgba(255, 202, 40, 0.5)",
      iconType: "firebase",
      snippetLang: "javascript",
      codeSnippet: `// Firestore Realtime Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /ktu_notes/{noteId} {
      allow read: if request.auth != null;
      allow write: if request.auth.token.role == 'admin';
    }
    match /user_queries/{queryId} {
      allow create: if request.auth != null;
      allow read: if request.auth.uid == resource.data.userId;
    }
  }
}`,
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "frameworks-cloud",
      proficiency: 86,
      highlight: "Event-driven runtime, asynchronous microservices, REST APIs, middleware",
      color: "#339933",
      glow: "rgba(51, 153, 51, 0.4)",
      iconType: "nodejs",
      snippetLang: "javascript",
      codeSnippet: `import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/summarize', async (req, res) => {
  const { notesText } = req.body;
  const summary = await geminiService.summarizeSyllabus(notesText);
  res.json({ success: true, summary });
});`,
    },
    {
      id: "docker",
      name: "Docker",
      category: "frameworks-cloud",
      proficiency: 80,
      highlight: "Containerization, reproducible deployment environments, microservices isolation",
      color: "#2496ED",
      glow: "rgba(36, 150, 237, 0.4)",
      iconType: "docker",
      snippetLang: "dockerfile",
      codeSnippet: `FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]`,
    },

    // Tools & Version Control
    {
      id: "git",
      name: "Git",
      category: "tools-ai",
      proficiency: 90,
      highlight: "Branching strategies, interactive rebasing, merge conflict resolution",
      color: "#F05032",
      glow: "rgba(240, 80, 50, 0.4)",
      iconType: "git",
      snippetLang: "bash",
      codeSnippet: `# Git developer workflow
git checkout -b feature/gemini-summarizer
git commit -m "feat(ai): integrate Gemini 1.5 streaming responses"
git push origin feature/gemini-summarizer`,
    },
    {
      id: "github",
      name: "GitHub",
      category: "tools-ai",
      proficiency: 90,
      highlight: "GitHub Actions CI/CD, issue tracking, pull requests, open-source collaboration",
      color: "#FFFFFF",
      glow: "rgba(255, 255, 255, 0.3)",
      iconType: "github",
      snippetLang: "yaml",
      codeSnippet: `name: CI Pipeline
on: [push, pull_request]
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Unit Tests
        run: npm test`,
    },
  ] as SkillItem[],

  coreConcepts: [
    {
      title: "Data Structures & Algorithms",
      desc: "Deep understanding of Trees, Graphs, Hash Tables, Heaps, and Dynamic Programming algorithms with time/space complexity trade-offs.",
      icon: "Binary",
      tags: ["O(n log n)", "Graph Traversal", "Hash Tables", "DP"],
    },
    {
      title: "Object-Oriented Programming (OOP)",
      desc: "Robust architectural design using Encapsulation, Polymorphism, Inheritance, Abstraction, and clean SOLID principles.",
      icon: "Layers3",
      tags: ["Encapsulation", "Polymorphism", "SOLID", "Design Patterns"],
    },
    {
      title: "Operating Systems & Concurrency",
      desc: "Process scheduling, thread synchronization, memory management, deadlock handling, POSIX calls, and file system architecture.",
      icon: "Cpu",
      tags: ["Multithreading", "Mutex/Semaphores", "Memory Paging", "Deadlocks"],
    },
    {
      title: "Database Fundamentals",
      desc: "ACID transactions, relational normalization (1NF to 3NF), index optimization, query execution plans, and NoSQL document modeling.",
      icon: "Database",
      tags: ["ACID Compliance", "Indexing", "NoSQL / Firestore", "Relational Schema"],
    },
    {
      title: "Web & API Architecture",
      desc: "RESTful principles, client-server communication, JSON schemas, real-time WebSocket/Firestore synchronization, and browser runtime APIs.",
      icon: "Globe2",
      tags: ["REST APIs", "DOM MutationObserver", "Async / Await", "Chrome APIs"],
    },
  ],

  projects: [
    {
      id: "ktu-notes-app",
      title: "AI KTU Notes App",
      tagline: "Intelligent Academic Companion with Gemini AI & Real-time Cloud Sync",
      category: "Mobile / AI / Full-Stack",
      period: "Academic Project",
      stack: ["Flutter", "Dart", "Python", "Firebase", "Google Gemini API", "Cloud Storage"],
      badge: "Flagship Mobile Project",
      accentColor: "#38bdf8",
      githubUrl: "https://github.com/joellljose",
      demoUrl: "#ktu-demo",
      summary: "Architected a comprehensive mobile learning assistant designed for KTU engineering students, integrating Gemini-powered doubt resolution and real-time syllabus notes.",
      highlights: [
        "Architected an AI-powered KTU study application using Flutter, Dart, Firebase, and Google Gemini API, combining syllabus-based notes, quizzes, community discussions, and personalized learning tools.",
        "Integrated Gemini-powered doubt resolution, code explanation, summarization, diagram generation, and semantic search to provide interactive learning assistance within the mobile app.",
        "Implemented Firebase Authentication, Firestore, Cloud Storage, real-time synchronization, and role-based access control (RBAC) for secure user management and academic resource delivery.",
      ],
    },
    {
      id: "meetmash",
      title: "MeetMash",
      tagline: "AI-Powered Google Meet Extension for Real-Time Insights & Action Items",
      category: "Browser Extension / GenAI",
      period: "Academic Project",
      stack: ["JavaScript", "Google Gemini API", "Chrome Extension APIs", "MutationObserver", "Local Storage"],
      badge: "Productivity Innovation",
      accentColor: "#a855f7",
      githubUrl: "https://github.com/joellljose",
      demoUrl: "#meetmash-demo",
      summary: "Engineered an intelligent Google Meet Chrome extension that converts real-time meeting conversations into actionable tasks and executive summaries via Google Gemini.",
      highlights: [
        "Built an AI-powered Google Meet Chrome extension using JavaScript and Gemini API to capture live captions and generate executive summaries, topic insights, and actionable meeting tasks.",
        "Implemented real-time transcript de-duplication with MutationObserver and persistent task tracking using browser local storage, ensuring clean transcripts and reliable checklist state.",
        "Developed automated action-item extraction, priority/deadline detection, and Markdown export, enabling users to convert meeting discussions into structured, downloadable outputs.",
      ],
    },
  ] as ProjectItem[],

  timeline: [
    {
      id: "cloud-internship",
      degree: "Cloud Computing Internship",
      institution: "Networkz Systems",
      period: "July 2026",
      location: "Kerala, India",
      score: "Verified Internship",
      scoreLabel: "Status",
      type: "certification",
      commitHash: "git checkout c38a192",
      details: [
        "Intensive practical training on cloud architectures, virtual networking, cloud compute resources, and scalable deployment pipelines.",
        "Hands-on experience configuring secure cloud infrastructure, identity management, and serverless compute functions.",
      ],
    },
    {
      id: "genai-hackathon",
      degree: "24-Hour National-Level Gen.AI Hackathon",
      institution: "MBITS / HexinOX",
      period: "March 2025",
      location: "Kerala, India",
      score: "Certificate of Participation",
      scoreLabel: "Award",
      type: "hackathon",
      commitHash: "git checkout h89b41e",
      details: [
        "Competed in a rigorous 24-hour sprint building real-world AI solutions with cutting-edge Generative AI models.",
        "Rapid prototyping, prompt engineering, agentic workflow architecture, and live product pitch under strict time constraints.",
      ],
    },
    {
      id: "btech-degree",
      degree: "B.Tech in Computer Science Engineering",
      institution: "Baselios Mathews II College of Engineering",
      period: "August 2023 – Present",
      location: "Sasthamkotta, Kollam, Kerala",
      score: "7.88",
      scoreLabel: "CGPA",
      type: "education",
      commitHash: "git checkout btech-cse",
      details: [
        "Final-year student specializing in Computer Science & Engineering with strong foundations in Data Structures, OS, DBMS, OOP, and AI.",
        "Active member of the IEEE Student Branch (BMCE), actively participating in workshops, technical seminars, and peer-to-peer mentoring initiatives.",
      ],
    },
    {
      id: "higher-secondary",
      degree: "12th (+2) Computer Science",
      institution: "CVKMHSS",
      period: "June 2021 – March 2023",
      location: "Eastkallada, Kollam, Kerala",
      score: "86%",
      scoreLabel: "Percentage",
      type: "education",
      commitHash: "git checkout cs-plus-two",
      details: [
        "Completed Higher Secondary Education in Computer Science stream with distinction (86%).",
        "Foundational coursework in C++, Python, Computer Hardware, and Database Systems.",
      ],
    },
  ] as EducationMilestone[],

  additional: {
    memberships: [
      {
        title: "IEEE Student Member",
        org: "Baselios Mathews II College of Engineering (BMCE)",
        role: "Active Student Member",
        desc: "Participating in technical activities, engineering hackathons, state-level workshops, and professional development initiatives.",
      },
    ],
    softSkills: [
      { name: "Clear Communication", level: "High", desc: "Articulating complex technical concepts to cross-functional peers" },
      { name: "Team Collaboration", level: "High", desc: "Proven track record in academic and hackathon project squads" },
      { name: "Time Management", level: "High", desc: "Balancing final-year engineering syllabus with intensive product development" },
      { name: "Problem Solving", level: "High", desc: "Analytical mindset breaking down complex systems into modular solutions" },
      { name: "Quick Learning", level: "High", desc: "Rapidly adopting emerging AI frameworks like Gemini API & modern stacks" },
    ],
  },
};
