import { profile } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
    </footer>
  )
}
