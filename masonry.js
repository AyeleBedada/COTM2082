let score = 0;

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

/* ================= 100 UNIQUE EXIT-EXAM QUESTIONS ================= */

const questions = [

/* ===== MATERIALS ===== */
{
q:"Which property of masonry makes it unsuitable for high tensile loading?",
options:["Low tensile strength","High ductility","High elasticity","High reinforcement ratio"],
answer:"Low tensile strength",
explanation:"Masonry is strong in compression but weak in tension due to brittle unit-mortar behavior.",
unit:"Materials",
difficulty:"Easy"
},

{
q:"Why are engineering bricks preferred in foundation walls?",
options:["Low water absorption","High color variation","High elasticity","Low density only"],
answer:"Low water absorption",
explanation:"Engineering bricks resist moisture penetration, making them suitable for below-ground construction.",
unit:"Materials",
difficulty:"Medium"
},

{
q:"Which masonry unit allows reinforcement to pass through its voids?",
options:["Hollow concrete block","Solid brick","Stone rubble","Glass block"],
answer:"Hollow concrete block",
explanation:"Hollow cores allow vertical and horizontal reinforcement placement.",
unit:"Materials",
difficulty:"Medium"
},

{
q:"What is the main limitation of rubble stone masonry?",
options:["Irregular geometry","High cost","Low compressive strength","Excess ductility"],
answer:"Irregular geometry",
explanation:"Irregular shapes make alignment and load distribution difficult.",
unit:"Materials",
difficulty:"Medium"
},

{
q:"Glass block masonry is primarily used for:",
options:["Load bearing walls","Light transmission partitions","Foundations","Structural beams"],
answer:"Light transmission partitions",
explanation:"Glass blocks are non-structural and used for diffused lighting and privacy.",
unit:"Materials",
difficulty:"Easy"
},

/* ===== SUBSTRUCTURE ===== */

{
q:"What is the primary function of a foundation in masonry structures?",
options:["Transfer load to soil","Improve aesthetics","Increase wall height","Reduce cost"],
answer:"Transfer load to soil",
explanation:"Foundations distribute structural loads safely into the ground.",
unit:"Substructure",
difficulty:"Easy"
},

{
q:"Which issue occurs if DPC is omitted?",
options:["Rising damp","Increased strength","Better insulation","Reduced settlement"],
answer:"Rising damp",
explanation:"Moisture rises through capillary action without DPC protection.",
unit:"Substructure",
difficulty:"Medium"
},

{
q:"In foundation drawings, strip footing is primarily used for:",
options:["Load-bearing walls","Roof slabs","Windows","Ceilings"],
answer:"Load-bearing walls",
explanation:"Strip footings support continuous wall loads.",
unit:"Substructure",
difficulty:"Medium"
},

{
q:"What is the minimum purpose of DPC in masonry walls?",
options:["Block moisture movement","Increase structural load","Improve wall color","Reduce reinforcement"],
answer:"Block moisture movement",
explanation:"DPC prevents capillary rise of water into walls.",
unit:"Substructure",
difficulty:"Easy"
},

{
q:"Which failure is most associated with poor substructure detailing?",
options:["Differential settlement","Glass breakage","Roof leakage","Paint peeling"],
answer:"Differential settlement",
explanation:"Uneven foundation support causes structural distortion.",
unit:"Substructure",
difficulty:"Difficult"
},

/* ===== SUPERSTRUCTURE ===== */

{
q:"What structural role do ring beams perform in masonry buildings?",
options:["Tie walls together","Decorate façade","Reduce cost","Replace plaster"],
answer:"Tie walls together",
explanation:"Ring beams distribute loads and improve structural integrity.",
unit:"Superstructure",
difficulty:"Medium"
},

{
q:"Why are lintels required above openings?",
options:["To transfer loads above openings","To reduce wall thickness","To increase window size","To improve lighting"],
answer:"To transfer loads above openings",
explanation:"Lintels carry loads around openings to prevent collapse.",
unit:"Superstructure",
difficulty:"Medium"
},

{
q:"Which element improves seismic performance of masonry walls?",
options:["Horizontal and vertical reinforcement bands","Paint finish","Thin mortar joints","Large openings"],
answer:"Horizontal and vertical reinforcement bands",
explanation:"Reinforcement improves ductility and earthquake resistance.",
unit:"Superstructure",
difficulty:"Difficult"
},

{
q:"In RC frame infill masonry, walls are considered:",
options:["Non-structural infill","Primary load frame","Foundation system","Roof structure"],
answer:"Non-structural infill",
explanation:"They fill space but are not primary load-bearing elements.",
unit:"Superstructure",
difficulty:"Medium"
},

{
q:"What happens if wall thickness is inconsistent across drawings?",
options:["Construction errors occur","Structure improves","Cost reduces significantly","No effect"],
answer:"Construction errors occur",
explanation:"Inconsistency leads to misinterpretation on site.",
unit:"Superstructure",
difficulty:"Easy"
},

/* ===== DRAWINGS ===== */

{
q:"Which drawing best communicates construction layering of masonry walls?",
options:["Section drawing","Site plan","Schedule","Elevation only"],
answer:"Section drawing",
explanation:"Sections show vertical layering and material buildup.",
unit:"Drawings",
difficulty:"Easy"
},

{
q:"What is the primary purpose of a detail drawing?",
options:["Show construction method","Show location only","Show site boundaries","Show zoning"],
answer:"Show construction method",
explanation:"Details explain how components are built.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"Why must masonry drawings be coordinated across plan, section, and detail?",
options:["To ensure consistency","To increase complexity","To reduce materials","To avoid detailing"],
answer:"To ensure consistency",
explanation:"Coordination prevents construction errors.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"What is typically shown in a wall schedule?",
options:["Wall types and thicknesses","Furniture layout","Electrical wiring","Roof drainage"],
answer:"Wall types and thicknesses",
explanation:"Schedules classify wall systems.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"What is a major consequence of missing detail references?",
options:["Site misinterpretation","Better execution","Faster construction","Lower cost"],
answer:"Site misinterpretation",
explanation:"Contractors cannot correctly interpret incomplete drawings.",
unit:"Drawings",
difficulty:"Difficult"
},

/* ===== DETAILING ===== */

{
q:"What is the standard mortar joint thickness in brick masonry?",
options:["10 mm","50 mm","25 mm","5 mm"],
answer:"10 mm",
explanation:"Standard masonry joints are approximately 10mm.",
unit:"Detailing",
difficulty:"Easy"
},

{
q:"Why is bond pattern important in brick masonry?",
options:["Load distribution","Color variation","Cost increase","Decoration only"],
answer:"Load distribution",
explanation:"Bond patterns improve structural stability.",
unit:"Detailing",
difficulty:"Medium"
},

{
q:"What is the effect of poor joint alignment?",
options:["Stress concentration","Improved strength","Reduced weight","Better insulation"],
answer:"Stress concentration",
explanation:"Misaligned joints weaken load paths.",
unit:"Detailing",
difficulty:"Difficult"
},

{
q:"Which component ensures wall stability at corners?",
options:["Interlocking bonding pattern","Paint finish","Glass blocks","Thin plaster"],
answer:"Interlocking bonding pattern",
explanation:"Corner bonding improves structural integrity.",
unit:"Detailing",
difficulty:"Medium"
},

{
q:"What is the role of expansion joints?",
options:["Allow movement","Increase stiffness","Reduce thickness","Improve color"],
answer:"Allow movement",
explanation:"They prevent cracking due to thermal or structural movement.",
unit:"Detailing",
difficulty:"Difficult"
},

/* ===== FINISHES ===== */

{
q:"What is the primary function of plaster in masonry walls?",
options:["Protect surface and improve finish","Increase load capacity","Replace mortar","Act as reinforcement"],
answer:"Protect surface and improve finish",
explanation:"Plaster protects masonry and provides finish.",
unit:"Finishes",
difficulty:"Easy"
},

{
q:"What causes plaster cracking?",
options:["Shrinkage and poor curing","High reinforcement","Good bonding","Thick walls"],
answer:"Shrinkage and poor curing",
explanation:"Improper curing leads to shrinkage cracks.",
unit:"Finishes",
difficulty:"Medium"
},

{
q:"External finishes primarily protect against:",
options:["Weather and moisture","Furniture load","Electrical faults","Lighting issues"],
answer:"Weather and moisture",
explanation:"Finishes protect walls from environmental exposure.",
unit:"Finishes",
difficulty:"Medium"
},

{
q:"Why is curing important in masonry finishes?",
options:["Strength development","Color change","Cost reduction","Decoration"],
answer:"Strength development",
explanation:"Curing ensures proper hydration and strength.",
unit:"Finishes",
difficulty:"Medium"
},

{
q:"What is a common failure in external render systems?",
options:["Delamination","Reinforcement increase","Load transfer improvement","Better bonding"],
answer:"Delamination",
explanation:"Poor bonding causes render separation.",
unit:"Finishes",
difficulty:"Difficult"
},

/* ===== LANDSCAPE ===== */

{
q:"What is the purpose of edge restraint in paving?",
options:["Prevent lateral movement","Increase color","Reduce cost","Improve lighting"],
answer:"Prevent lateral movement",
explanation:"Edge restraint keeps paving units stable.",
unit:"Landscape",
difficulty:"Medium"
},

{
q:"Why is sub-base important in pavements?",
options:["Load distribution","Decoration","Color uniformity","Electrical grounding"],
answer:"Load distribution",
explanation:"It distributes loads evenly to the soil.",
unit:"Landscape",
difficulty:"Medium"
},

{
q:"What failure occurs without proper drainage behind retaining walls?",
options:["Hydrostatic pressure buildup","Improved strength","Reduced cost","Better aesthetics"],
answer:"Hydrostatic pressure buildup",
explanation:"Water pressure can cause wall failure.",
unit:"Landscape",
difficulty:"Difficult"
},
/* ===================== QUESTIONS 34–100 ===================== */

/* ===== MATERIALS (continued) ===== */

{
q:"Which property makes stone masonry highly durable but difficult to standardize?",
options:["Natural variability of stone","High elasticity","Uniform size","Low density"],
answer:"Natural variability of stone",
explanation:"Stone varies in shape, strength, and size, making standardization difficult.",
unit:"Materials",
difficulty:"Medium"
},

{
q:"What is the main advantage of hollow concrete blocks over solid blocks?",
options:["Reduced weight and improved insulation","Higher color variation","Lower strength always","No mortar requirement"],
answer:"Reduced weight and improved insulation",
explanation:"Hollow blocks reduce dead load and improve thermal performance.",
unit:"Materials",
difficulty:"Medium"
},

{
q:"What is a key limitation of glass blocks in construction?",
options:["Non-load bearing capacity","High strength","High reinforcement","Structural role in foundations"],
answer:"Non-load bearing capacity",
explanation:"Glass blocks are used only for partitions and light transmission.",
unit:"Materials",
difficulty:"Medium"
},

{
q:"Why is modular coordination important in masonry design?",
options:["Reduces cutting and improves efficiency","Increases randomness","Removes need for drawings","Eliminates mortar use"],
answer:"Reduces cutting and improves efficiency",
explanation:"Standard module sizes reduce waste and errors.",
unit:"Materials",
difficulty:"Medium"
},

{
q:"Which masonry unit is most suitable for seismic reinforcement insertion?",
options:["Hollow concrete block","Random rubble stone","Brick without cores","Glass block"],
answer:"Hollow concrete block",
explanation:"Cavities allow vertical and horizontal reinforcement placement.",
unit:"Materials",
difficulty:"Difficult"
},

/* ===== SUBSTRUCTURE ===== */

{
q:"What is the function of a strip footing in masonry buildings?",
options:["Support continuous wall loads","Support roof loads directly","Support windows","Support finishes"],
answer:"Support continuous wall loads",
explanation:"Strip footings distribute wall loads into soil continuously.",
unit:"Substructure",
difficulty:"Easy"
},

{
q:"What failure occurs when foundation width is undersized?",
options:["Bearing capacity failure","Paint cracking","Roof collapse","Electrical failure"],
answer:"Bearing capacity failure",
explanation:"Soil cannot safely support concentrated loads.",
unit:"Substructure",
difficulty:"Difficult"
},

{
q:"What is the role of hardcore filling under floors?",
options:["Load distribution and leveling","Decoration","Wall support","Roof insulation"],
answer:"Load distribution and leveling",
explanation:"Hardcore stabilizes and levels substructure layers.",
unit:"Substructure",
difficulty:"Medium"
},

{
q:"Why is damp-proof membrane placed under ground floors?",
options:["Prevent ground moisture penetration","Increase strength","Reduce cost","Improve color"],
answer:"Prevent ground moisture penetration",
explanation:"It blocks moisture rising into floor slabs.",
unit:"Substructure",
difficulty:"Medium"
},

{
q:"Which condition leads to differential settlement?",
options:["Uneven soil bearing capacity","Uniform load distribution","Proper compaction","Good drainage"],
answer:"Uneven soil bearing capacity",
explanation:"Different soil conditions cause uneven movement.",
unit:"Substructure",
difficulty:"Difficult"
},

/* ===== SUPERSTRUCTURE ===== */

{
q:"What is the main function of shear walls in masonry structures?",
options:["Resist lateral loads","Decorate façade","Support windows","Reduce mortar use"],
answer:"Resist lateral loads",
explanation:"Shear walls resist wind and seismic forces.",
unit:"Superstructure",
difficulty:"Difficult"
},

{
q:"Why is vertical alignment critical in masonry walls?",
options:["Ensures load transfer continuity","Improves color","Reduces cost","Increases openings"],
answer:"Ensures load transfer continuity",
explanation:"Misalignment creates eccentric loading.",
unit:"Superstructure",
difficulty:"Medium"
},

{
q:"What is the function of bond beams in masonry?",
options:["Tie walls together and distribute loads","Decorate walls","Replace plaster","Support furniture"],
answer:"Tie walls together and distribute loads",
explanation:"Bond beams improve structural integrity.",
unit:"Superstructure",
difficulty:"Medium"
},

{
q:"What happens when masonry walls are not properly tied to slabs?",
options:["Out-of-plane failure risk increases","Better strength","Reduced cracking","Improved stability"],
answer:"Out-of-plane failure risk increases",
explanation:"Walls may collapse under lateral loads.",
unit:"Superstructure",
difficulty:"Difficult"
},

{
q:"What is a major weakness of unreinforced masonry?",
options:["Brittle failure under tension","High ductility","High flexibility","High elasticity"],
answer:"Brittle failure under tension",
explanation:"Unreinforced masonry cracks suddenly under tension.",
unit:"Superstructure",
difficulty:"Medium"
},

/* ===== DRAWINGS ===== */

{
q:"Which drawing element ensures correct construction sequencing?",
options:["Detail drawings and references","Color scheme","Furniture layout","Landscape plan"],
answer:"Detail drawings and references",
explanation:"Details guide step-by-step construction process.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"What is the purpose of a wall section in masonry documentation?",
options:["Show vertical construction assembly","Show site boundaries","Show parking layout","Show zoning"],
answer:"Show vertical construction assembly",
explanation:"Sections illustrate full wall build-up.",
unit:"Drawings",
difficulty:"Easy"
},

{
q:"What problem arises from missing dimension coordination?",
options:["On-site misalignment","Better accuracy","Reduced cost","Faster work"],
answer:"On-site misalignment",
explanation:"Inconsistent dimensions cause construction errors.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"What does a construction detail primarily communicate?",
options:["Connection between building components","Site location","Budget plan","Landscape design"],
answer:"Connection between building components",
explanation:"Details show how parts are physically joined.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"Why is referencing important in drawing sets?",
options:["Links plans, sections, and details","Reduces drawing size","Eliminates dimensions","Improves aesthetics only"],
answer:"Links plans, sections, and details",
explanation:"References ensure navigability in drawings.",
unit:"Drawings",
difficulty:"Medium"
},

/* ===== DETAILING ===== */

{
q:"What is the effect of excessive mortar thickness?",
options:["Weak joints and shrinkage cracks","Higher strength","Better insulation","Lower cost"],
answer:"Weak joints and shrinkage cracks",
explanation:"Thick mortar shrinks and weakens bond.",
unit:"Detailing",
difficulty:"Medium"
},

{
q:"Why are staggered joints used in masonry?",
options:["Improve stability and load distribution","Decorative purpose only","Reduce wall height","Increase openings"],
answer:"Improve stability and load distribution",
explanation:"Staggered joints prevent continuous weak planes.",
unit:"Detailing",
difficulty:"Medium"
},

{
q:"What is the purpose of cavity walls?",
options:["Moisture control and insulation","Structural reinforcement","Increase weight","Reduce height"],
answer:"Moisture control and insulation",
explanation:"Cavities prevent moisture penetration and improve thermal behavior.",
unit:"Detailing",
difficulty:"Difficult"
},

{
q:"What causes cracking above openings?",
options:["Lack of lintel support","Good bonding","Proper reinforcement","Low load"],
answer:"Lack of lintel support",
explanation:"Loads concentrate without proper lintels.",
unit:"Detailing",
difficulty:"Medium"
},

{
q:"What is the function of movement joints?",
options:["Absorb thermal expansion","Increase rigidity","Improve color","Reduce cost"],
answer:"Absorb thermal expansion",
explanation:"They prevent cracking due to movement.",
unit:"Detailing",
difficulty:"Difficult"
},

/* ===== FINISHES ===== */

{
q:"Why is bonding between plaster and masonry important?",
options:["Ensures adhesion and durability","Increases color variation","Reduces load","Improves lighting"],
answer:"Ensures adhesion and durability",
explanation:"Good bonding prevents delamination.",
unit:"Finishes",
difficulty:"Medium"
},

{
q:"What is efflorescence in masonry?",
options:["Salt deposit on surface","Structural collapse","Steel corrosion only","Paint peeling"],
answer:"Salt deposit on surface",
explanation:"Water carries salts to surface during evaporation.",
unit:"Finishes",
difficulty:"Medium"
},

{
q:"What causes render delamination?",
options:["Poor surface preparation","Proper curing","Good bonding","Low humidity"],
answer:"Poor surface preparation",
explanation:"Weak bonding leads to separation.",
unit:"Finishes",
difficulty:"Medium"
},

{
q:"Why is waterproofing important in external walls?",
options:["Prevents moisture penetration","Improves color","Increases weight","Reduces height"],
answer:"Prevents moisture penetration",
explanation:"Protects structure from weather damage.",
unit:"Finishes",
difficulty:"Medium"
},

{
q:"What is the role of curing in masonry finishes?",
options:["Strength development and crack control","Color change","Cost reduction","Decoration"],
answer:"Strength development and crack control",
explanation:"Proper curing improves hydration and reduces cracks.",
unit:"Finishes",
difficulty:"Medium"
},

/* ===== LANDSCAPE ===== */

{
q:"What is the main function of retaining walls?",
options:["Resist lateral earth pressure","Support roofs","Hold doors","Provide lighting"],
answer:"Resist lateral earth pressure",
explanation:"They stabilize soil at different levels.",
unit:"Landscape",
difficulty:"Medium"
},

{
q:"Why is drainage essential behind retaining walls?",
options:["Reduce hydrostatic pressure","Improve color","Increase weight","Support finishes"],
answer:"Reduce hydrostatic pressure",
explanation:"Water pressure can cause wall failure.",
unit:"Landscape",
difficulty:"Difficult"
},

{
q:"What is the role of compaction in paving sub-bases?",
options:["Improve load-bearing capacity","Improve aesthetics","Reduce color variation","Increase vegetation"],
answer:"Improve load-bearing capacity",
explanation:"Compaction stabilizes base layers.",
unit:"Landscape",
difficulty:"Medium"
},

{
q:"What is interlocking in segmental paving?",
options:["Load transfer between units","Paint bonding","Roof support","Wall reinforcement"],
answer:"Load transfer between units",
explanation:"Interlocking distributes loads across units.",
unit:"Landscape",
difficulty:"Medium"
},

{
q:"What happens if paving lacks edge restraint?",
options:["Lateral spreading occurs","Better strength","Reduced cost","Improved drainage"],
answer:"Lateral spreading occurs",
explanation:"Units move sideways without restraint.",
unit:"Landscape",
difficulty:"Difficult"
},
/* ===================== QUESTIONS 69–100 ===================== */

/* ===== SUPERSTRUCTURE (continued) ===== */

{
q:"What is the main structural implication of out-of-plane loading on masonry walls?",
options:[
"Wall instability or collapse",
"Improved stiffness",
"Reduced cracking",
"Increased ductility"
],
answer:"Wall instability or collapse",
explanation:"Masonry walls are weak in resisting lateral out-of-plane forces, leading to collapse if not restrained.",
unit:"Superstructure",
difficulty:"Difficult"
},

{
q:"Why is vertical continuity of masonry important from foundation to roof?",
options:[
"Ensures uninterrupted load path",
"Improves wall color",
"Reduces cost only",
"Eliminates need for mortar"
],
answer:"Ensures uninterrupted load path",
explanation:"Loads must transfer continuously from roof to foundation without interruption.",
unit:"Superstructure",
difficulty:"Medium"
},

{
q:"What is the function of masonry tie elements in framed structures?",
options:[
"Connect infill walls to structural frame",
"Increase wall height",
"Replace plaster layers",
"Reduce reinforcement needs"
],
answer:"Connect infill walls to structural frame",
explanation:"Ties ensure infill walls move compatibly with the structural frame.",
unit:"Superstructure",
difficulty:"Medium"
},

{
q:"Which failure is common when masonry walls are not properly anchored to slabs?",
options:[
"Out-of-plane collapse",
"Thermal expansion improvement",
"Better load distribution",
"Reduced cracking"
],
answer:"Out-of-plane collapse",
explanation:"Unsupported walls can overturn under lateral forces.",
unit:"Superstructure",
difficulty:"Difficult"
},

{
q:"What is the role of parapet walls in masonry construction?",
options:[
"Provide edge protection and roof termination",
"Support foundations",
"Carry floor loads",
"Act as beams"
],
answer:"Provide edge protection and roof termination",
explanation:"Parapets finish roof edges and provide safety barriers.",
unit:"Superstructure",
difficulty:"Medium"
},

/* ===== DRAWINGS (continued) ===== */

{
q:"What is the key risk of missing section drawings in masonry projects?",
options:[
"Misinterpretation of vertical construction",
"Improved clarity",
"Reduced cost",
"Better scheduling"
],
answer:"Misinterpretation of vertical construction",
explanation:"Without sections, builders cannot understand vertical layering.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"Why must masonry drawings include material specifications?",
options:[
"To ensure correct construction materials are used",
"To increase drawing size",
"To reduce detailing",
"To avoid coordination"
],
answer:"To ensure correct construction materials are used",
explanation:"Specifications prevent substitution errors on site.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"What is the function of construction sequencing notes in drawings?",
options:[
"Guide step-by-step execution",
"Decorate drawings",
"Reduce structural load",
"Increase cost estimation errors"
],
answer:"Guide step-by-step execution",
explanation:"Sequencing ensures proper construction order.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"What does poor drawing coordination typically lead to?",
options:[
"Site errors and rework",
"Faster construction",
"Better quality",
"Reduced cost automatically"
],
answer:"Site errors and rework",
explanation:"Inconsistent drawings confuse contractors.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"Why is referencing critical in masonry detail drawings?",
options:[
"Connects details to plans and sections",
"Improves aesthetics",
"Reduces material use",
"Eliminates dimensions"
],
answer:"Connects details to plans and sections",
explanation:"References allow navigation between drawings.",
unit:"Drawings",
difficulty:"Medium"
},

/* ===== DETAILING (continued) ===== */

{
q:"What is the main reason for providing reinforcement in masonry walls?",
options:[
"Improve tensile and seismic resistance",
"Increase color variation",
"Reduce mortar use",
"Improve surface finish"
],
answer:"Improve tensile and seismic resistance",
explanation:"Reinforcement compensates for masonry's low tensile strength.",
unit:"Detailing",
difficulty:"Difficult"
},

{
q:"What is the effect of improper bonding in brick masonry corners?",
options:[
"Weak structural stability",
"Increased strength",
"Better insulation",
"Reduced load"
],
answer:"Weak structural stability",
explanation:"Corners rely on proper interlocking for stability.",
unit:"Detailing",
difficulty:"Medium"
},

{
q:"Why are control joints introduced in long masonry walls?",
options:[
"To prevent cracking due to movement",
"To increase strength",
"To reduce wall thickness",
"To eliminate mortar"
],
answer:"To prevent cracking due to movement",
explanation:"Control joints accommodate shrinkage and expansion.",
unit:"Detailing",
difficulty:"Difficult"
},

{
q:"What is a major consequence of poor curing in masonry joints?",
options:[
"Reduced bond strength",
"Increased reinforcement",
"Better durability",
"Lower permeability always"
],
answer:"Reduced bond strength",
explanation:"Poor curing weakens mortar adhesion.",
unit:"Detailing",
difficulty:"Medium"
},

{
q:"Why is alignment critical during masonry construction?",
options:[
"It ensures load transfer continuity",
"It improves color",
"It reduces cost",
"It eliminates mortar use"
],
answer:"It ensures load transfer continuity",
explanation:"Misalignment creates eccentric loading.",
unit:"Detailing",
difficulty:"Medium"
},

/* ===== FINISHES (continued) ===== */

{
q:"What is the main cause of paint peeling on masonry walls?",
options:[
"Moisture penetration and poor surface preparation",
"High reinforcement",
"Good curing",
"Thick walls"
],
answer:"Moisture penetration and poor surface preparation",
explanation:"Water weakens adhesion between paint and surface.",
unit:"Finishes",
difficulty:"Medium"
},

{
q:"What is the function of primer in masonry finishing systems?",
options:[
"Improve adhesion between surface and paint",
"Increase wall thickness",
"Replace plaster",
"Reduce load"
],
answer:"Improve adhesion between surface and paint",
explanation:"Primer bonds finishing layers to masonry.",
unit:"Finishes",
difficulty:"Medium"
},

{
q:"Why do external finishes require flexibility in design?",
options:[
"To accommodate thermal movement",
"To increase color only",
"To reduce structural load",
"To eliminate joints"
],
answer:"To accommodate thermal movement",
explanation:"Temperature changes cause expansion and contraction.",
unit:"Finishes",
difficulty:"Difficult"
},

{
q:"What is a major effect of poor waterproofing in masonry walls?",
options:[
"Moisture ingress and deterioration",
"Increased strength",
"Better insulation",
"Reduced cracking"
],
answer:"Moisture ingress and deterioration",
explanation:"Water damages masonry over time.",
unit:"Finishes",
difficulty:"Medium"
},

{
q:"Why is surface preparation critical before plastering?",
options:[
"It ensures proper bonding",
"It increases wall height",
"It reduces cost",
"It improves reinforcement"
],
answer:"It ensures proper bonding",
explanation:"Clean surfaces allow proper adhesion.",
unit:"Finishes",
difficulty:"Medium"
},

/* ===== LANDSCAPE (continued) ===== */

{
q:"What is the purpose of weep holes in retaining walls?",
options:[
"Drain water and reduce pressure",
"Increase strength",
"Decorate wall",
"Support roof loads"
],
answer:"Drain water and reduce pressure",
explanation:"Weep holes release trapped water behind walls.",
unit:"Landscape",
difficulty:"Medium"
},

{
q:"What happens if sub-base compaction is insufficient in paving?",
options:[
"Settlement and surface deformation",
"Increased strength",
"Better drainage",
"Reduced cost"
],
answer:"Settlement and surface deformation",
explanation:"Weak base leads to uneven pavement surfaces.",
unit:"Landscape",
difficulty:"Difficult"
},

{
q:"Why is geotextile sometimes used in masonry landscape works?",
options:[
"To separate soil layers and improve stability",
"To increase color",
"To reduce wall height",
"To replace mortar"
],
answer:"To separate soil layers and improve stability",
explanation:"Geotextiles improve drainage and separation.",
unit:"Landscape",
difficulty:"Medium"
},

{
q:"What is the role of slope grading in external masonry works?",
options:[
"Direct water away from structures",
"Increase structural load",
"Improve aesthetics only",
"Reduce reinforcement"
],
answer:"Direct water away from structures",
explanation:"Proper grading prevents water accumulation.",
unit:"Landscape",
difficulty:"Medium"
},

{
q:"What is the consequence of poor drainage design in masonry landscapes?",
options:[
"Water accumulation and structural damage",
"Improved durability",
"Reduced load",
"Better compaction"
],
answer:"Water accumulation and structural damage",
explanation:"Water weakens soil and masonry elements.",
unit:"Landscape",
difficulty:"Difficult"
},
/* ===================== QUESTIONS 94–100 ===================== */

/* ===== FINAL INTEGRATION + CRITICAL THINKING ===== */

{
q:"What is the most critical consequence of poor coordination between structural frame and masonry infill?",
options:[
"Unexpected cracking and separation of walls",
"Improved structural behavior",
"Reduced material use",
"Better thermal performance"
],
answer:"Unexpected cracking and separation of walls",
explanation:"Differential movement between frame and infill causes cracking and interface failure.",
unit:"Integration",
difficulty:"Difficult"
},

{
q:"Why is modular coordination between masonry units and structural grid important?",
options:[
"It ensures alignment between design and construction systems",
"It reduces structural loads",
"It eliminates reinforcement need",
"It improves paint finishing only"
],
answer:"It ensures alignment between design and construction systems",
explanation:"Modular coordination ensures architectural drawings match real construction dimensions.",
unit:"Integration",
difficulty:"Medium"
},

{
q:"What is a major risk when masonry drawings lack clear sequencing instructions?",
options:[
"Incorrect construction order and site confusion",
"Improved speed",
"Reduced cost",
"Better bonding"
],
answer:"Incorrect construction order and site confusion",
explanation:"Without sequencing, contractors may build in incorrect stages.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"Which condition best describes failure due to poor joint workmanship?",
options:[
"Loss of load transfer continuity",
"Increased ductility",
"Improved strength",
"Better insulation"
],
answer:"Loss of load transfer continuity",
explanation:"Poor joints interrupt stress flow in masonry walls.",
unit:"Detailing",
difficulty:"Difficult"
},

{
q:"Why is redundancy important in masonry structural systems?",
options:[
"It provides alternative load paths during failure",
"It reduces wall thickness",
"It improves aesthetics",
"It eliminates mortar use"
],
answer:"It provides alternative load paths during failure",
explanation:"Redundancy improves safety by distributing loads if one element fails.",
unit:"Superstructure",
difficulty:"Difficult"
},

{
q:"What is the most appropriate reason for including construction details in architectural drawings?",
options:[
"To ensure constructability and reduce site interpretation errors",
"To increase drawing complexity",
"To reduce structural strength",
"To avoid coordination"
],
answer:"To ensure constructability and reduce site interpretation errors",
explanation:"Details translate design intent into buildable instructions.",
unit:"Drawings",
difficulty:"Medium"
},

{
q:"In masonry construction, what is the most important relationship between drawings and site execution?",
options:[
"Drawings must directly guide accurate physical construction",
"Drawings are optional references only",
"Site work replaces drawings",
"Drawings are only for presentation"
],
answer:"Drawings must directly guide accurate physical construction",
explanation:"Construction drawings are legal and technical instructions for execution.",
unit:"Integration",
difficulty:"Easy"
}

];


// render
const quizDiv = document.getElementById("quiz");

questions.forEach((q,i)=>{

let div = document.createElement("div");
div.className="question";

let opts = shuffle([...q.options]);

div.innerHTML = `<b>Q${i+1} (${q.difficulty} | ${q.unit})</b><br>
${q.q}<br><br>`;

opts.forEach(opt=>{
let btn=document.createElement("button");
btn.innerText=opt;

btn.onclick=function(){
if(div.classList.contains("done")) return;

div.classList.add("done");

if(opt===q.answer){
btn.classList.add("correct");
score++;
}else{
btn.classList.add("incorrect");
}

div.querySelectorAll("button").forEach(b=>{
if(b.innerText===q.answer)b.classList.add("correct");
});

document.getElementById("scoreBoard").innerText=
`Score: ${score} / 100`;

div.querySelector(".explanation").style.display="block";
};

div.appendChild(btn);
});

let exp=document.createElement("div");
exp.className="explanation";
exp.innerHTML="Explanation: "+q.explanation;
div.appendChild(exp);

quizDiv.appendChild(div);

});


document.getElementById("submitBtn").onclick=function(){
alert("Final Score: "+score+"/100");
};