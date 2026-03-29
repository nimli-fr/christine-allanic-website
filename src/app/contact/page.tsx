"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telephone: (form.elements.namedItem("telephone") as HTMLInputElement).value,
      sujet: (form.elements.namedItem("sujet") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="watercolor-bg py-16 md:py-24 relative overflow-hidden">
        <div className="watercolor-blob w-80 h-80 bg-primary top-[-60px] right-[-60px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">Contact</h1>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Une question ? Un projet ? N&rsquo;h&eacute;sitez pas &agrave; me contacter.
            Je vous r&eacute;ponds sous 48h.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Infos */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-accent mb-2">Email</h3>
                <a href="mailto:callanic989@gmail.com" className="text-primary hover:underline">
                  callanic989@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-bold text-accent mb-2">Organisme</h3>
                <p className="text-foreground/70 text-sm">
                  Formations And Co<br />
                  Christine Allanic<br />
                  SIRET : 33022175700051<br />
                  NDA : 24450457945
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm text-foreground/70">
                  <strong className="text-primary">Qualiopi</strong> &mdash; La certification
                  qualit&eacute; a &eacute;t&eacute; d&eacute;livr&eacute;e au titre des actions de formation et bilans de comp&eacute;tences.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-foreground/70 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-foreground/70 mb-1">
                      T&eacute;l&eacute;phone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="sujet" className="block text-sm font-medium text-foreground/70 mb-1">
                      Sujet *
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white"
                    >
                      <option value="">S&eacute;lectionnez...</option>
                      <option value="bilan">Bilan de Comp&eacute;tences</option>
                      <option value="sst">Formation SST</option>
                      <option value="mac-sst">Recyclage MAC SST</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-sm font-medium">
                    Merci ! Votre message a bien &eacute;t&eacute; envoy&eacute;. Je vous r&eacute;pondrai sous 48h.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm font-medium">
                    Une erreur est survenue. Veuillez r&eacute;essayer ou m&rsquo;&eacute;crire directement &agrave; callanic989@gmail.com.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
