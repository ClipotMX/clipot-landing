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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver al blog
            </Link>

            {post.category && (
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {post.category}
              </span>
            )}

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author || "Clipot"}
              </span>
              <span className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {new Date(post.ts).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-2" />
                {(post.readTime || "5 min")} de lectura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover rounded-3xl"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto prose prose-lg prose-neutral dark:prose-invert"
          >
            <div className="text-muted-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: String(post.content || "") }} />
          </motion.article>
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
