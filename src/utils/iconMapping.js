// src/utils/iconMapping.js
import * as SolidIcons from "@heroicons/react/24/solid";
import * as OutlineIcons from "@heroicons/react/24/outline";

// Mapping des concepts vers les icônes Heroicons
export const heroIconMapping = {
    // Histoire
    Préhistoire: OutlineIcons.ArchiveBoxIcon,
    Antiquité: OutlineIcons.BuildingColumnsIcon,
    "Moyen Âge": OutlineIcons.HomeModernIcon,
    Renaissance: OutlineIcons.PaintBrushIcon,
    "Époque moderne": OutlineIcons.BuildingOfficeIcon,
    "Époque contemporaine": OutlineIcons.BuildingSkyscraperIcon,

    // Propriétés historiques
    "Habitat et architecture": OutlineIcons.HomeIcon,
    "Personnages importants": OutlineIcons.UserGroupIcon,
    "Inventions et découvertes": OutlineIcons.LightBulbIcon,
    "Vie quotidienne": OutlineIcons.CalendarDaysIcon,

    // Pédagogie
    Accueil: OutlineIcons.HandRaisedIcon,
    "Entrée de séance": OutlineIcons.ArrowRightOnRectangleIcon,
    "Lancement d'activité": OutlineIcons.PlayCircleIcon,
    "Mise en activité": OutlineIcons.PencilSquareIcon,
    "Mise en commun": OutlineIcons.UserGroupIcon,
    Institutionnalisation: OutlineIcons.BookOpenIcon,

    // Propriétés pédagogiques
    "Objectifs visés": OutlineIcons.FlagIcon,
    "Écueils possibles": OutlineIcons.ExclamationTriangleIcon,
    "Gestes professionnels": OutlineIcons.HandRaisedIcon,
    "Tâches concrètes": OutlineIcons.ClipboardDocumentListIcon,

    // Icônes par défaut
    default_famille: OutlineIcons.Square3Stack3DIcon,
    default_valeur: OutlineIcons.DocumentTextIcon,
};

// Fonction pour obtenir l'icône correspondant à un concept
export const getHeroIcon = (concept, type = "default") => {
    if (heroIconMapping[concept]) {
        return heroIconMapping[concept];
    }

    return type === "famille"
        ? heroIconMapping.default_famille
        : heroIconMapping.default_valeur;
};
