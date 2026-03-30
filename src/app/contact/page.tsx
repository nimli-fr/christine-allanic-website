"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">Demandez un entretien</h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Cet entretien est <strong>sans engagement</strong>. Il nous permet de faire connaissance
            et de voir ensemble si mon accompagnement vous correspond.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Infos */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-accent mb-2">Email</h3>
                <a href="mailto:formationsetco@gmail.com" className="text-primary hover:underline">
                  formationsetco@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-bold text-accent mb-2">Organisme</h3>
                <p className="text-gray-600 text-sm">
                  Formations And Co<br />
                  Christine Allanic<br />
                  SIRET : 33822175700051<br />
                  NDA : 24450457945
                </p>
              </div>

              <Image
                src="/images/qualiopi.png"
                alt="Certification Qualiopi"
                width={160}
                height={96}
                className="rounded-lg"
              />

              <div className="bg-cyan-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  <strong className="text-primary">Qualiopi</strong> &mdash; Certification
                  qualit&eacute; d&eacute;livr&eacute;e au titre des actions de formation et bilans de comp&eacute;tences.
                </p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-4">
                <p className="text-sm text-gray-600">
                  <strong className="text-accent">Sans engagement</strong> &mdash; Cet entretien
                  est l&rsquo;occasion de faire connaissance et d&rsquo;&eacute;changer sur vos besoins.
                  Aucun engagement de votre part.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-accent mb-6">Demandez votre entretien d&eacute;couverte</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-600 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-600 mb-1">
                        T&eacute;l&eacute;phone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="sujet" className="block text-sm font-medium text-gray-600 mb-1">
                        Votre situation *
                      </label>
                      <select
                        id="sujet"
                        name="sujet"
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary bg-white"
                      >
                        <option value="">S&eacute;lectionnez...</option>
                        <option value="bilan">Bilan de Comp&eacute;tences</option>
                        <option value="sst">Formation SST initiale</option>
                        <option value="mac-sst">Recyclage MAC SST</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="D&eacute;crivez votre situation et vos attentes..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-y"
                    />
                  </div>

                  <p className="text-xs text-gray-400">
                    En soumettant ce formulaire, vous acceptez notre{" "}
                    <a href="/politique-de-confidentialite" className="text-primary hover:underline">
                      politique de confidentialit&eacute;
                    </a>. Vos donn&eacute;es sont trait&eacute;es conform&eacute;ment au RGPD.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 shadow-sm"
                  >
                    {status === "loading" ? "Envoi en cours..." : "Demander mon entretien d\u00e9couverte"}
                  </button>

                  {status === "success" && (
                    <p className="text-green-600 text-sm font-medium text-center">
                      Merci ! Votre demande a bien &eacute;t&eacute; envoy&eacute;e. Je vous recontacte rapidement.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 text-sm font-medium text-center">
                      Une erreur est survenue. Veuillez r&eacute;essayer ou m&rsquo;&eacute;crire directement &agrave; formationsetco@gmail.com.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
