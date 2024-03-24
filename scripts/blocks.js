{
	// EXAMPLE (replace <> with actual information)
	// const <exampleStructure> = extend(<TYPE>, "<example-structure>", {});
	
	////// OTHER //////
	//TODO: Add stuff here. I am tired of no content here for over 2 months.
	
	// REGION - TURRETS //
	const starStriker = extend(PowerTurret, "star-striker", {});
	
	
	
	////// CLASSIC + //////
	
	// REGION - TURRETS //
	const single = extend(ItemTurret, "single", {});
	const doubleTurret = extend(ItemTurret, "double", {}); //DO NOT USE JUST "double" BECAUSE THIS IS JS!! //Edit from the future: I actually didn't know "double" was a thing before.
	const repeater = extend(ItemTurret, "repeater", {});
	const broadshot = extend(ItemTurret, "broadshot", {});
	const railgun = extend(ItemTurret, "railgun", {});
	const flamer = extend(ItemTurret, "flamer", {});
	const laser = extend(TractorBeamTurret, "laser", {});
	const flakCannon = extend(ItemTurret, "flak-cannon", {});
	const irradiator = extend(ItemTurret, "irradiator", {});
	const tesla = extend(PowerTurret, "tesla", {});
	/* I have reworked all turret sprites above on 24/03/2024 - Alexander888 */
	const chainGun = extend(ItemTurret, "chain-gun", {});
	
	// REGION - PRODUCTION //
	const stoneDrill = extend(Drill, "stone-drill", {});
	const ironDrill = extend(Drill, "iron-drill", {});
	const copperDrill = extend(Drill, "copper-drill", {});
	const steelDrill = extend(Drill, "steel-drill", {});
	const steamDrill = extend(Drill, "steam-drill", {});
	const omnirill = extend(Drill, "omnidrill", {});
	const waterPump = extend(SolidPump, "water-pump", {});
	const ironExtractor = extend(GenericCrafter, "iron-extractor", {});
	const heatDrill = extend(AttributeCrafter, "heat-drill", {});
	const coalExtractor = extend(GenericCrafter, "coal-extractor", {});
	const titaniumExtractor = extend(GenericCrafter, "titanium-extractor", {});
	const uraniumExtractor = extend(GenericCrafter, "uranium-extractor", {});
	const algaeFarm = extend(AttributeCrafter, "algae-farm", {});
	const algaeGreenhouse = extend(GenericCrafter, "algae-greenhouse", {});
	
	// REGION - DISTRIBUTION //
	const stoneConveyor = extend(Conveyor, "stone-conveyor", {});
	const steelConveyor = extend(Conveyor, "steel-conveyor", {});
	const heavyConveyor = extend(ArmoredConveyor, "heavy-conveyor", {});
	const diriumConveyor = extend(Conveyor, "dirium-conveyor", {});
	const stoneRouter = extend(Router, "stone-router", {});
	const stoneJunction = extend(Junction, "stone-junction", {});
	const ironBridgeConveyor = extend(BufferedItemBridge, "iron-bridge-conveyor", {});
	const steelSorter = extend(Sorter, "steel-sorter", {});
	const teleporter = extend(MassDriver, "teleporter", {});
	
	// REGION - LIQUIDS //
	const pneumaticPump = extend(Pump, "pneumatic-pump", {});
	const fluxpump = extend(Pump, "fluxpump", {});
	const steelConduit = extend(Conduit, "steel-conduit", {});
	const impulseConduit = extend(Conduit, "impulse-conduit", {});
	const steelRouter = extend(LiquidRouter, "steel-router", {});
	const steelJunction = extend(LiquidJunction, "steel-junction", {});
	const steelBridgeConduit = extend(LiquidBridge, "steel-bridge-conduit", {});
	
	// REGION - CRAFTING //
	// plate //
	const platePress = extend(GenericCrafter, "plate-press", {});
	const plateMultiPress = extend(GenericCrafter, "plate-multi-press", {});
	// silicon //
	const siliconFurnace = extend(GenericCrafter, "silicon-furnace", {});
	const siliconInfuser = extend(GenericCrafter, "silicon-infuser", {});
	// steel //
	const steelSmelter = extend(GenericCrafter, "steel-smelter", {});
	const lavaSmelter = extend(GenericCrafter, "lava-smelter", {});
	const steelFurnace = extend(GenericCrafter, "steel-furnace", {});
	// dirium //
	const diriumCrucible = extend(GenericCrafter, "dirium-crucible", {});
	const diriumMerger = extend(GenericCrafter, "dirium-merger", {});
	// graphite //
	const graphiteCompressor = extend(GenericCrafter, "graphite-compressor", {});
	// steam //
	const steamKettle = extend(GenericCrafter, "steam-kettle", {});
	// stone //
	const stoneCompressor = extend(GenericCrafter, "stone-compressor", {});
	const solidifier = extend(GenericCrafter, "solidifier", {});
	// quartz //
	const quartzFurnace = extend(GenericCrafter, "quartz-furnace", {});
	// iron //
	// sulphur //
	const sulphurExtractor = extend(GenericCrafter, "sulphur-extractor", {});
	// coal //
	const algaeCompressor = extend(GenericCrafter, "algae-compressor", {});
	const oilSolidifier = extend(GenericCrafter, "oil-solidifier", {});
	// sand //
	const stonePulverizer = extend(GenericCrafter, "stone-pulverizer", {});
	const stoneCrusher = extend(GenericCrafter, "stone-crusher", {});
	// titanium //
	// oil //
	const sandSifter = extend(GenericCrafter, "sand-sifter", {});
	const algaePress = extend(GenericCrafter, "algae-press", {});
	// lava //
	const frictionMelter = extend(GenericCrafter, "friction-melter", {});
	const sandMelter = extend(GenericCrafter, "sand-melter", {});
	// other //
	const waterElectrolyzer = extend(GenericCrafter, "water-electrolyzer", {});
	const algaeDigestor = extend(GenericCrafter, "algae-digestor", {}); //prev.: algae-leecher
	const lavaSeparator = extend(Separator, "lava-separator", {});
	/*
	const learner = extend(GenericCrafter, "learner", {}); //BLOAT
	const rockniteSynthesizer = extend(GenericCrafter, "rocknite-synthesizer", {}); //BLOAT
	const scaliumSynthesizer = extend(GenericCrafter, "scalium-synthesizer", {}); //BLOAT
	const vectogenSynthesizer = extend(GenericCrafter, "vectogen-synthesizer", {}); //BLOAT
	const qutonSynthesizer = extend(GenericCrafter, "quton-synthesizer", {}); //BLOAT
	const diamondSynthesizer = extend(GenericCrafter, "diamond-synthesizer", {}); //BLOAT
	*/
	
	// REGION - POWER //
	const steelNode = extend(BeamNode, "steel-node", {});
	const accumulator = extend(Battery, "accumulator", {});
	const combustor = extend(ConsumeGenerator, "combustor", {}); //prev.: coal-generator
	const oilGenerator = extend(ConsumeGenerator, "oil-generator", {});
	const lavaGenerator = extend(ConsumeGenerator, "lava-generator", {});
	const rtg = extend(ConsumeGenerator, "rtg", {}); //prev.: uranium-rtg-generator
	const uraniumReactor = extend(NuclearReactor, "uranium-reactor", {});
	const steamTurbine = extend(ConsumeGenerator, "steam-turbine", {});
	/*
	const isotopeGenerator = extend(ThermalGenerator, "isotope-generator", {}); //BUGGED
	*/
	
	// REGION - DEFENSE //
	const stoneWallClassic = extend(Wall, "stone-wall-classic", {});
	const ironWall = extend(Wall, "iron-wall", {});
	const steelWall = extend(Wall, "steel-wall", {});
	const steelWallLarge = extend(Wall, "steel-wall-large", {});
	const diriumWall = extend(Wall, "dirium-wall", {});
	const diriumWallLarge = extend(Wall, "dirium-wall-large", {});
	
	// REGION - EFFECT //
	const menderTurret = extend(PowerTurret, "mender-turret", {});
	const regenTurret = extend(PowerTurret, "regen-turret", {});
	const extinguisher = extend(LiquidTurret, "extinguisher", {});
}