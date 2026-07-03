import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface RetakeProps {
  text: string;
}

export default function Retake({ text }: RetakeProps) {
  const { language } = useLanguage();
  const heading = language === "fr" ? "Rattrapage (Session 2)" : "Retake (Session 2)";

  if (!text) return null;

  return (
    <section id="retake" className="py-12 md:py-16 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{heading}</h2>
        <Card className="p-6">
          <div className="prose max-w-none">
            <p>{text}</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
