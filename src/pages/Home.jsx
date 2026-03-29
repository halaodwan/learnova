import {
  Paperclip,
  FileText,
  File,
  Headphones,
  Image,
  Video,
  BookOpen,
  AlignJustify,
  Layers,
  ClipboardList,
  Timer,
  Play,
  Send,
  MessageSquare,
} from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left side */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-800 mb-5">
              <Paperclip size={22} className="text-slate-700" />
              Upload Content
            </h2>

            <button className="w-full bg-[#1e3a8a] hover:bg-[#1a3277] text-white rounded-xl py-3 font-medium flex items-center justify-center gap-2 mb-4 transition">
              <Paperclip size={18} />
              Attach Files
            </button>

            <div className="grid grid-cols-5 gap-3 mb-5">
              <div className="bg-slate-100 rounded-xl h-20 flex flex-col items-center justify-center text-slate-600 text-sm">
                <FileText size={22} className="mb-2" />
                Text
              </div>

              <div className="bg-slate-100 rounded-xl h-20 flex flex-col items-center justify-center text-slate-600 text-sm">
                <File size={22} className="mb-2" />
                File
              </div>

              <div className="bg-slate-100 rounded-xl h-20 flex flex-col items-center justify-center text-slate-600 text-sm">
                <Headphones size={22} className="mb-2" />
                Audio
              </div>

              <div className="bg-slate-100 rounded-xl h-20 flex flex-col items-center justify-center text-slate-600 text-sm">
                <Image size={22} className="mb-2" />
                Image
              </div>

              <div className="bg-slate-100 rounded-xl h-20 flex flex-col items-center justify-center text-slate-600 text-sm">
                <Video size={22} className="mb-2" />
                Video
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="bg-[#1e3a8a] hover:bg-[#1a3277] text-white rounded-xl py-3 font-medium flex items-center justify-center gap-2 transition">
                <BookOpen size={18} />
                Explain
              </button>

              <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-xl py-3 font-medium flex items-center justify-center gap-2 transition">
                <AlignJustify size={18} />
                Summarize
              </button>

              <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-3 font-medium flex items-center justify-center gap-2 transition">
                <Layers size={18} />
                Flashcards
              </button>

              <button className="bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-3 font-medium flex items-center justify-center gap-2 transition">
                <ClipboardList size={18} />
                Exams
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-800 mb-5">
              <Timer size={22} className="text-slate-700" />
              Study Timer
            </h2>

            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-3 font-medium flex items-center justify-center gap-2 transition">
              <Play size={18} />
              Start Study Session
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-slate-800 mb-5">
            <MessageSquare size={22} className="text-sky-500" />
            Ask AI
          </h2>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-sky-400 text-white flex items-center justify-center text-sm font-bold shrink-0">
                AI
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 text-slate-700 text-sm shadow-sm max-w-[85%]">
                Hello! I’m your AI study assistant. Upload content and I’ll help you
                create flashcards, summaries, explanations, and exams. What would you
                like to learn today?
              </div>
            </div>

            <div className="flex justify-end items-start gap-3 mb-4">
              <div className="bg-slate-200 rounded-2xl px-4 py-3 text-slate-700 text-sm shadow-sm max-w-[70%]">
                Can you summarize my biology notes?
              </div>
              <div className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-sm font-bold shrink-0">
                A
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-sky-400 text-white flex items-center justify-center text-sm font-bold shrink-0">
                AI
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 text-slate-700 text-sm shadow-sm max-w-[85%]">
                Of course! Please upload your biology notes using the Attach Files
                button, then click "Summarize" to get started.
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mb-4">
            Learnova uses AI to help you study smarter — create flashcards, summaries,
            explanations, and practice exams from any content.
          </p>

          <div className="mt-auto flex items-center gap-3">
            <input
              type="text"
              placeholder="Ask anything..."
              className="flex-1 border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-[#1e3a8a] hover:bg-[#1a3277] text-white p-3 rounded-xl transition">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;