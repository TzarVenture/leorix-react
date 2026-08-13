export const FDDI_ENGAGEMENT_SCOPE = [
  {
    id: 'scope-1',
    title: 'A Validated Footwear Platform',
    desc: 'Five men\'s and five women\'s variants built on one single engineered bottom-unit system.'
  },
  {
    id: 'scope-2',
    title: 'Full Engineering Documentation',
    desc: '3D CAD models, 2D manufacturing drawings, and material specifications tied to mechanical and functional requirements.'
  },
  {
    id: 'scope-3',
    title: 'Functional Prototype Fabrication',
    desc: 'Fabricated across full size ranges for laboratory mechanical and human biomechanical testing.'
  },
  {
    id: 'scope-4',
    title: 'Mechanical Durability Assessment',
    desc: 'Structural integrity testing, flexing endurance, and failure-mode analysis under cyclic stress.'
  },
  {
    id: 'scope-5',
    title: 'Human Biomechanical Evaluation',
    desc: 'Plantar pressure distribution, joint loading analysis, and functional performance across prototype iterations.'
  },
  {
    id: 'scope-6',
    title: 'Intellectual Property Documentation',
    desc: 'Technical documentation supporting proprietary sole structure and last geometry IP filings.'
  }
];

export const COMPONENT_SPEC_TABLE = [
  {
    component: 'Upper Mesh',
    material: '3D Jacquard Polyester',
    committedSpec: 'Air permeability > 180 cm³/cm²/s',
    function: 'Thermal dissipation & structural containment'
  },
  {
    component: 'Midfoot Shank',
    material: 'Glass-Fiber Reinforced Nylon',
    committedSpec: 'Torsional rigidity > 12.5 Nm/deg',
    function: 'Arch protection & midfoot stability'
  },
  {
    component: 'Cushioning Core',
    material: 'Micro-Cellular Polyurethane',
    committedSpec: 'Density 55 kg/m³ · Energy return 58%',
    function: 'Attenuate impact without unstable sink'
  },
  {
    component: 'Outsole Tread',
    material: 'High-Density Rubber Blend',
    committedSpec: 'Hardness 62 Shore A · DIN Abrasion < 110 mm³',
    function: 'Wet/dry traction & wear resistance'
  },
  {
    component: 'Heel Counter',
    material: 'Thermoset Polymer Plate',
    committedSpec: 'Flexural modulus > 2.1 GPa',
    function: 'Calcaneus alignment & rearfoot control'
  }
];

export const VALIDATION_METRICS = [
  {
    metric: 'Plantar Pressure Peak Reduction',
    value: '42.8%',
    status: 'FDDI Test Protocol B-14',
    note: 'Compared to standard flat lifestyle insoles'
  },
  {
    metric: 'Torsional Rigidity Index',
    value: 'Grade A',
    status: 'FDDI Mechanical Test M-09',
    note: 'Prevents arch collapse over 12hr continuous wear'
  },
  {
    metric: 'Flexural Endurance',
    value: '100,000+ Cycles',
    status: 'FDDI Durability Spec D-02',
    note: 'Zero delamination or sole cracking detected'
  }
];
