import { Route } from '@angular/router';
import { HomeContentComponent } from './content/home-content/home-content.component';
import { ContactContentComponent } from './content/contact-content/contact-content.component';
import { LondonSystemContentComponent } from './content/openings-content/london-system-content/london-system-content.component';
import { KingsIndianDefenseContentComponent } from './content/openings-content/kings-indian-defense-content/kings-indian-defense-content.component';
import { WhatAreOpeningsContentComponent } from './content/openings-content/what-are-openings-content/what-are-openings-content.component';
import { WhatIsChessContentComponent } from './content/basics-content/what-is-chess-content/what-is-chess-content.component';
import { PawnContentComponent } from './content/basics-content/pawn-content/pawn-content.component';
import { KnightContentComponent } from './content/basics-content/knight-content/knight-content.component';
import { QueenContentComponent } from './content/basics-content/queen-content/queen-content.component';
import { KingContentComponent } from './content/basics-content/king-content/king-content.component';
import { ChecksAndCheckmatesContentComponent } from './content/basics-content/checks-and-checkmates-content/checks-and-checkmates-content.component';
import { DrawsContentComponent } from './content/basics-content/draws-content/draws-content.component';
import { WhatIsEloContentComponent } from './content/training-content/what-is-elo-content/what-is-elo-content.component';
import { PuzzlesContentComponent } from './content/training-content/puzzles-content/puzzles-content.component';
import { AnalysisContentComponent } from './content/training-content/analysis-content/analysis-content.component';
import { TrainingRegimentContentComponent } from './content/training-content/training-regiment-content/training-regiment-content.component';
import { ForksContentComponent } from './content/tactics-content/forks-content/forks-content.component';
import { SkewersContentComponent } from './content/tactics-content/skewers-content/skewers-content.component';
import { InterferenceContentComponent } from './content/tactics-content/interference-content/interference-content.component';
import { AttractionContentComponent } from './content/tactics-content/attraction-content/attraction-content.component';
import { RemovingADefenderContentComponent } from './content/tactics-content/removing-a-defender-content/removing-a-defender-content.component';
import { ZugswangContentComponent } from './content/tactics-content/zugswang-content/zugswang-content.component';
import { ForcingStalemateContentComponent } from './content/tactics-content/forcing-stalemate-content/forcing-stalemate-content.component';
import { WhatIsStrategyContentComponent } from './content/strategy-content/what-is-strategy-content/what-is-strategy-content.component';
import { PlansContentComponent } from './content/strategy-content/plans-content/plans-content.component';
import { PawnStructureContentComponent } from './content/strategy-content/pawn-structure-content/pawn-structure-content.component';
import { PawnStormsContentComponent } from './content/strategy-content/pawn-storms-content/pawn-storms-content.component';
import { ImbalancesContentComponent } from './content/strategy-content/imbalances-content/imbalances-content.component';
import { CaroKannContentComponent } from './content/openings-content/caro-kann-content/caro-kann-content.component';
import { WhatIsAGrandmasterContentComponent } from './content/grandmasters-content/what-is-a-grandmaster-content/what-is-a-grandmaster-content.component';
import { PaulMorphyContentComponent } from './content/grandmasters-content/paul-morphy-content/paul-morphy-content.component';
import { JoseRaulCapablancaContentComponent } from './content/grandmasters-content/jose-raul-capablanca-content/jose-raul-capablanca-content.component';
import { BobbyFischerContentComponent } from './content/grandmasters-content/bobby-fischer-content/bobby-fischer-content.component';
import { GarryKasparovContentComponent } from './content/grandmasters-content/garry-kasparov-content/garry-kasparov-content.component';
import { MagnusCarlsenContentComponent } from './content/grandmasters-content/magnus-carlsen-content/magnus-carlsen-content.component';
import { ResourcesContentComponent } from './content/resources-content/resources-content.component';
import { AboutContentComponent } from './content/about-content/about-content.component';
import { PinsContentComponent } from './content/tactics-content/pins-content/pins-content.component';
import { RevealedAttackContentComponent } from './content/tactics-content/revealed-attack-content/revealed-attack-content.component';
import { SacrificesContentComponent } from './content/tactics-content/sacrifices-content/sacrifices-content.component';
import { BishopContentComponent } from './content/basics-content/bishop-content/bishop-content.component';
import { XRayContentComponent } from './content/tactics-content/x-ray-content/x-ray-content.component';
import { ZwischenzugContentComponent } from './content/tactics-content/zwischenzug-content/zwischenzug-content.component';
import { TacticsContentComponent } from './content/tactics-content/tactics-content.component';

export const routes: Route[] = [
  { path: '', component: HomeContentComponent },
  { path: 'contact', component: ContactContentComponent },
  
  { path: 'basics/what-is-chess', component: WhatIsChessContentComponent },
  { path: 'basics/pawn', component: PawnContentComponent },
  { path: 'basics/knight', component: KnightContentComponent },
  { path: 'basics/bishop', component: BishopContentComponent },
  { path: 'basics/queen', component: QueenContentComponent },
  { path: 'basics/king', component: KingContentComponent },
  { path: 'basics/checks-and-checkmates', component: ChecksAndCheckmatesContentComponent },
  { path: 'basics/draws', component: DrawsContentComponent },
  
  { path: 'training/what-is-elo', component: WhatIsEloContentComponent },
  { path: 'training/puzzles', component: PuzzlesContentComponent },
  { path: 'training/analysis', component: AnalysisContentComponent },
  { path: 'training/training-regiment', component: TrainingRegimentContentComponent },
  
  { path: 'tactics', component: TacticsContentComponent },
  { path: 'tactics/forks', component: ForksContentComponent },
  { path: 'tactics/skewers', component: SkewersContentComponent },
  { path: 'tactics/interference', component: InterferenceContentComponent },
  { path: 'tactics/attraction', component: AttractionContentComponent },
  { path: 'tactics/removing-a-defender', component: RemovingADefenderContentComponent },
  { path: 'tactics/zugswang', component: ZugswangContentComponent },
  { path: 'tactics/pins', component: PinsContentComponent },
  { path: 'tactics/revealed-attacks', component: RevealedAttackContentComponent },
  { path: 'tactics/sacrifices', component: SacrificesContentComponent },
  { path: 'tactics/x-ray-attacks', component: XRayContentComponent },
  { path: 'tactics/zwichenzug', component: ZwischenzugContentComponent },
  { path: 'tactics/forcing-stalemate', component: ForcingStalemateContentComponent },
  
  { path: 'strategy/what-is-strategy', component: WhatIsStrategyContentComponent },
  { path: 'strategy/plans', component: PlansContentComponent },
  { path: 'strategy/pawn-structure', component: PawnStructureContentComponent },
  { path: 'strategy/pawn-storms', component: PawnStormsContentComponent },
  { path: 'strategy/imbalances', component: ImbalancesContentComponent },
  
  { path: 'openings/what-are-openings', component: WhatAreOpeningsContentComponent },
  { path: 'openings/london-system', component: LondonSystemContentComponent },
  { path: 'openings/kings-indian-defense', component: KingsIndianDefenseContentComponent },
  { path: 'openings/caro-kann-defense', component: CaroKannContentComponent },
  
  { path: 'grandmasters/what-is-a-grandmaster', component: WhatIsAGrandmasterContentComponent },
  { path: 'grandmasters/paul-morphy', component: PaulMorphyContentComponent },
  { path: 'grandmasters/jose-raul-capablanca', component: JoseRaulCapablancaContentComponent },
  { path: 'grandmasters/bobby-fischer', component: BobbyFischerContentComponent },
  { path: 'grandmasters/gary-kasparov', component: GarryKasparovContentComponent },
  { path: 'grandmasters/magnus-carlsen', component: MagnusCarlsenContentComponent },
  
  { path: 'resources', component: ResourcesContentComponent },
  
  { path: 'about', component: AboutContentComponent },
];