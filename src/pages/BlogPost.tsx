import { useParams, Link, Navigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

type BlogPostData = {
  title: string;
  slug: string;
  excerpt: string;
  category?: string;
  author?: string;
  image?: string;
  content?: string;
  ts?: string;
  publish_at?: string;
  read_time?: string;
  readTime?: string;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const url = import.meta.env.VITE_SUPABASE_URL;
        const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;
        if (url && anon) {
          const supabase = createClient(url, anon);
          const { data, error } = await supabase
            .from("blog_posts")
            .select("*")
            .eq("slug", slug)
            .eq("status", "published")
            .limit(1)
            .maybeSingle();
          if (!error && data) {
            setPost(data as BlogPostData);
            return;
          }
        }
        const res = await fetch(`http://localhost:3001/api/public/posts/${slug}`);
        const json = await res.json();
        if (json?.ok) setPost(json.item as BlogPostData);
      } catch {
        setPost(null);
      }
    })();
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts: Array<Pick<BlogPostData, "slug" | "title" | "category" | "image">> = [];

  return (
    <div className="min-h-screen">
      <SEO
        title={`${post.title} | Blog de marketing digital en México – Clipot`}
        description={post.excerpt}
        keywords={[
          post.category || "Marketing digital",
          "blog marketing digital méxico",
          "marketing digital cdmx",
          "generación de leads méxico",
          "paid media méxico",
          "crm ventas méxico",
        ]}
        type="article"
        canonical={`/blog/${post.slug}`}
      />
      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver al blog
            </Link>

            {post.category && (
              <span className="text-sm font-mono uppercase tracking-widest text-primary px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                {post.category}
              </span>
            )}

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 italic">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {new Date(post.publish_at || post.ts || Date.now()).toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime || post.read_time || "5 min"} de lectura
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10" data-aos="zoom-in">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-[21/9] object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article 
              className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:italic prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 transition-colors"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
              data-aos="fade-up"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para aplicar estas estrategias?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Agenda una llamada con nuestro equipo y te ayudamos a implementarlas en tu negocio.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contacto">Agendar llamada gratis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
            También te puede interesar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                to={`/blog/${relatedPost.slug}`}
                className="bg-background rounded-2xl overflow-hidden group shadow-sm ring-1 ring-border hover:shadow-md transition-shadow"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold mt-2 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
