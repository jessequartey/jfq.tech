import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import { ArrowDownRight, ArrowRightIcon, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const JESSE_BIRTH_YEAR = 1993;
const LIMIT = 2; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
        <div className="relative">
          <span className="absolute -right-2 -top-2 text-3xl">🇬🇭</span>
          <Image
            className="rounded-full border-4 border-primary/10 shadow-lg transition-all hover:border-primary/30"
            src="/jesse.jpg"
            alt="Photo of Jesse"
            width={240}
            height={240}
            priority
          />
        </div>
        <div className="flex max-w-2xl flex-col">
          <h1 className="title bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-6xl font-bold text-transparent">
            Hi, I&apos;m Jesse 👋
          </h1>
          <p className="mt-4 text-xl font-light">Full Stack Developer</p>
          <p className="mt-2 text-base font-light leading-relaxed text-muted-foreground">
            I&apos;m passionate about solving complex problems through elegant
            code. With expertise in AI and full-stack development, I build
            scalable solutions that make a real impact. Currently focused on
            leveraging technology to enhance education in Africa.
          </p>
          <div className="mt-4 flex items-end gap-1">
            <p className="text-sm font-semibold">
              Ask me anything about my work
            </p>
            <ArrowDownRight className="size-4 animate-bounce" />
          </div>
          <section className="mt-6 flex items-center gap-6">
            <Link href="/resume.pdf" target="_blank">
              <Button
                variant="outline"
                className="transition-colors hover:scale-105 hover:bg-primary/10"
              >
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-4" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  );
}
