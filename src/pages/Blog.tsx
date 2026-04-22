import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

type PublicPost = { title: string; excerpt: string; category: string; readTime: string; image?: string; slug: string };

const Blog = () => {
  const [posts, setPosts] = useState<PublicPost[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const url = import.meta.env.VITE_SUPABASE_URL;
        const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;
        if (url && anon) {
          const supabase = createClient(url, anon);
          const { data, error } = await supabase
            .from("blog_posts")
            .select("title, slug, image, category, read_time, ts, content, status, publish_at")
            .eq("status", "published")
            .lte("publish_at", new Date().toISOString() || new Date(0).toISOString());
          if (!error && data) {
            setPosts(
              data.map((p: { title: string; slug: string; image?: string; category?: string; read_time?: string; content?: string }) => ({
                title: p.title,
                slug: p.slug,
                image: p.image,
                category: p.category || "Blog",
                readTime: p.read_time || "5 min",
                excerpt: String(p.content || "").replace(/<[^>]+>/g, "").slice(0, 220),
              }))
            );
            return;
          }
        }
        const res = await fetch("http://localhost:3001/api/public/posts");
        const json = await res.json();
        if (json?.ok) setPosts(json.items || []);
      } catch {
        setPosts([]);
      }
    })();
  }, []);
  return (
    <div className="min-h-screen">
      <SEO
        title="Blog de marketing digital en México – Clipot"
        description="Blog de marketing digital para México: generación y gestión de leads, paid media, automatización y CRM. Enfoque práctico para equipos comerciales en todo México."
        keywords={[
          "blog marketing digital méxico",
          "generación de leads méxico",
          "paid media méxico",
          "automatización de marketing méxico",
          "crm ventas méxico",
          "marketing digital cerca de mí",
        ]}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <span className="text-sm font-medium text-primary mb-4 block">BLOG</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 italic">
              <span className="sr-only">Agencia de marketing digital</span>
              Tips & Tricks
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estrategias, tácticas y aprendizajes de gestionar miles de leads. 
              Sin relleno, solo lo que funciona.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <article
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-background rounded-2xl overflow-hidden group cursor-pointer h-full shadow-sm ring-1 ring-border hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={post.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-primary px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors italic">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                      Leer artículo <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
            {posts.length === 0 && (
              <div className="col-span-3 text-center text-muted-foreground">No hay publicaciones aún.</div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Tips directo a tu inbox
            </h2>
            <p className="text-background/70 mb-8">
              Suscríbete y recibe estrategias de generación de leads cada semana. 
              Sin spam, solo valor.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
