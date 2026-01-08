import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, AlertTriangle, Home, Wrench, Shield, Zap, CheckCircle, Droplets, Wind, Snowflake } from "lucide-react";

const Services = () => {
  const emergencyServices = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
      title: "Dépannage toiture urgence 7j/7",
      description: "Intervention rapide 24h/24 pour fuites, infiltrations, tuiles cassées",
      details: [
        "Réparation fuite de toit urgente et non urgente",
        "Pose de bâche de toiture temporaire", 
        "Intervention sur cheminée dangereuse",
        "Remplacement tuile cassée, fissurée, déplacée"
      ],
      price: "À partir de 120€",
      urgent: true
    },
    {
      icon: <Wind className="h-8 w-8 text-blue-600" />,
      title: "Travaux après tempête",
      description: "Remise en état après intempéries, vents violents, grêle",
      details: [
        "Évaluation des dégâts post-tempête",
        "Sécurisation immédiate des lieux",
        "Réparation éléments arrachés",
        "Expertise pour assurance"
      ],
      price: "Devis gratuit",
      urgent: true
    },
    {
      icon: <Droplets className="h-8 w-8 text-cyan-600" />,
      title: "Réparation infiltrations",
      description: "Détection et réparation de toutes infiltrations d'eau",
      details: [
        "Recherche de fuite avec caméra thermique",
        "Réparation étanchéité toiture",
        "Traitement anti-humidité",
        "Garantie décennale"
      ],
      price: "À partir de 150€",
      urgent: false
    }
  ];

  const regularServices = [
    {
      icon: <Home className="h-8 w-8 text-green-600" />,
      title: "Rénovation de toiture",
      description: "Réfection complète, remplacement tuiles, ardoises, zinc",
      details: [
        "Dépose ancienne couverture",
        "Pose nouvelle charpente si nécessaire", 
        "Installation tuiles, ardoises, zinc",
        "Isolation thermique intégrée"
      ],
      price: "À partir de 45€/m²"
    },
    {
      icon: <Wrench className="h-8 w-8 text-orange-600" />,
      title: "Pose de gouttières",
      description: "Installation et remplacement gouttières PVC, alu, zinc",
      details: [
        "Gouttières PVC, aluminium, zinc",
        "Chéneaux et descentes pluviales",
        "Système d'évacuation complet",
        "Entretien et débouchage"
      ],
      price: "À partir de 35€/ml"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Isolation projetée",
      description: "Isolation thermique par l'extérieur et combles",
      details: [
        "Isolation combles perdus",
        "Isolation sous rampants",
        "Isolation par l'extérieur",
        "Matériaux certifiés RT2020"
      ],
      price: "À partir de 25€/m²"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Nettoyage anti-mousse",
      description: "Démoussage, traitement hydrofuge, entretien toiture",
      details: [
        "Démoussage haute pression",
        "Traitement anti-mousse préventif",
        "Application hydrofuge",
        "Nettoyage gouttières inclus"
      ],
      price: "À partir de 15€/m²"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-teal-600" />,
      title: "Vérification toiture",
      description: "Diagnostic complet, expertise, devis gratuit",
      details: [
        "Inspection complète toiture",
        "Rapport détaillé avec photos",
        "Conseils d'entretien",
        "Devis travaux si nécessaire"
      ],
      price: "Gratuit"
    }
  ];

  const additionalServices = [
    {
      title: "Ravalement de façade",
      description: "Nettoyage, réparation et peinture façades",
      price: "À partir de 30€/m²"
    },
    {
      title: "Peinture extérieure", 
      description: "Peinture toiture, façade, volets",
      price: "À partir de 20€/m²"
    },
    {
      title: "Maçonnerie",
      description: "Réparation murs, joints, cheminées",
      price: "Sur devis"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-gradient-emergency">
                URGENCE TOITURE
              </div>
              <Badge variant="destructive" className="bg-red-600">
                20 ans d'expérience
              </Badge>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-red-600" />
                <a href="tel:0645908124" className="font-semibold text-red-600 hover:text-red-700">
                  06 45 90 81 24
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-600" />
                <a href="mailto:urgence.toiture.pro@gmail.com" className="text-blue-600 hover:text-blue-700">
                  urgence.toiture.pro@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-yellow-300">Services</span> de Couverture
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Spécialistes en urgence toiture depuis 20 ans. Intervention rapide 7j/7 
            dans le Val-d'Oise et l'Oise pour tous vos travaux de couverture.
          </p>
        </div>
      </section>

      {/* Services d'urgence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services d'<span className="text-gradient-emergency">Urgence</span>
            </h2>
            <p className="text-xl text-gray-600">
              Intervention rapide 24h/24 - 7j/7 pour toutes urgences toiture
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className={`card-professional ${service.urgent ? 'border-red-200 bg-red-50' : ''}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      {service.urgent && (
                        <Badge variant="destructive" className="mt-1">URGENCE</Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {service.price}
                    </Badge>
                    <Button size="sm" className="btn-emergency">
                      Appeler maintenant
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services réguliers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services <span className="text-gradient-professional">Réguliers</span>
            </h2>
            <p className="text-xl text-gray-600">
              Travaux de couverture, rénovation et entretien toiture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularServices.map((service, index) => (
              <Card key={index} className="card-professional">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {service.icon}
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {service.price}
                    </Badge>
                    <Button size="sm" variant="outline">
                      Devis gratuit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services additionnels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services <span className="text-gradient-emergency">Complémentaires</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ravalement, peinture extérieure et maçonnerie
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-professional text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
                    {service.price}
                  </Badge>
                  <Button className="w-full" variant="outline">
                    Demander un devis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photos démonstratifs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Photos <span className="text-gradient-professional">Démonstratifs</span>
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos réalisations et la qualité de nos interventions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <img 
                src="./images/services_toiture_20260108_094801.png" 
                alt="Services de toiture" 
                className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white font-semibold">Services de couverture</p>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="./images/intervention_urgence_20260108_094801.png" 
                alt="Intervention d'urgence" 
                className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white font-semibold">Intervention urgence</p>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="./images/equipe_urgence_toiture_20260108_094803.png" 
                alt="Équipe URGENCE TOITURE" 
                className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white font-semibold">Notre équipe professionnelle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un devis gratuit ?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contactez-nous pour une estimation gratuite de vos travaux de couverture. 
            Déplacement et étude offerts dans le Val-d'Oise et l'Oise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              06 45 90 81 24
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-4">
              <Mail className="mr-2 h-5 w-5" />
              urgence.toiture.pro@gmail.com
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-gradient-emergency">
              URGENCE TOITURE
            </h3>
            <p className="text-gray-300 mb-4">
              Couvreur spécialisé en urgence toiture depuis plus de 20 ans
            </p>
            <p className="text-gray-400">
              &copy; 2024 URGENCE TOITURE - Tous droits réservés - urgencetoiture.site
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;