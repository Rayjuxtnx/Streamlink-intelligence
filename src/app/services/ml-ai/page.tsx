
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const basicPackage = [
  'Data collection & preprocessing (cleaning, formatting, labeling)',
  'Exploratory data analysis (EDA) & insights',
  'Simple predictive model (e.g., regression or classification)',
  'Model training using Python (Scikit-learn, TensorFlow, or PyTorch)',
  'Basic dashboard or API integration for model use',
  'Documentation of workflow & results',
  '1 revision or retraining session',
];

const standardPackage = [
  'Everything in Basic, plus:',
  'Advanced model development (NLP, computer vision, or deep learning)',
  'Custom model fine-tuning with real-world data',
  'API integration with frontend or backend system',
  'Model evaluation (accuracy, recall, precision, confusion matrix, etc.)',
  'Cloud deployment (AWS, Google Cloud, or Azure)',
  'Continuous learning pipeline setup (auto-retraining)',
  'Visualization dashboard (Streamlit, Dash, or custom web UI)',
  'Security and data privacy setup',
];

const premiumPackage = [
  'Everything in Standard, plus:',
  'Full AI system design (data pipeline → model → API → dashboard)',
  'Large-scale data engineering (ETL automation & big data integration)',
  'Deep learning models (CNNs, RNNs, Transformers)',
  'AI-powered automation (recommendation engines, intelligent agents)',
  'Integration with IoT or cloud platforms',
  'Real-time inference API setup (for live predictions)',
  'Model explainability & bias detection',
  'Ongoing optimization and performance tracking',
  'Maintenance, scalability, and retraining support',
];

export default function MlAiPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <Button variant="link" asChild className="mb-4">
            <Link href="/services"> &larr; Back to Services</Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold font-headline">
              ML & AI
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              I provide end-to-end machine learning and AI services, from data collection and model development to deployment and integration, helping you unlock the power of your data.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">
            Service Packages
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-green-500">🟢</span> Basic Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 40,000 – 100,000</p>
                <p className="text-center text-sm text-muted-foreground">Small projects, startups, or prototypes needing simple ML solutions.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {basicPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-primary flex flex-col shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-blue-500">🔵</span> Standard Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 120,000 – 300,000</p>
                <p className="text-center text-sm text-muted-foreground">Businesses integrating AI into existing systems or building medium-scale ML apps.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {standardPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-purple-500">🟣</span> Premium Package
                </CardTitle>
                <p className="text-center text-xl font-bold">Ksh 350,000 – 900,000+</p>
                <p className="text-center text-sm text-muted-foreground">Corporates, SaaS platforms, or research-level AI systems.</p>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                {premiumPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold font-headline">
            Ready to get started or have questions?
          </h2>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
