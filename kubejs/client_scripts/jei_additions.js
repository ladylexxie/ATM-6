onEvent('jei.add.items', e => {
  utils.listOf(['dragonic', 'allthemodium', 'vibranium', 'unobtainium', 'soul_lava', 'netherite']).forEach(type => e.add([`resourcefulbees:${type}_bee_spawn_egg`]))

  e.add([
    'minecraft:dragon_egg',
    'structurize:plain_oak_oak_timber_frame',
    'structurize:double_crossed_oak_oak_timber_frame',
    'structurize:framed_oak_oak_timber_frame',
    'structurize:side_framed_oak_oak_timber_frame',
    'structurize:up_gated_oak_oak_timber_frame',
    'structurize:down_gated_oak_oak_timber_frame',
    'structurize:one_crossed_lr_oak_oak_timber_frame',
    'structurize:one_crossed_rl_oak_oak_timber_frame',
    'structurize:horizontal_plain_oak_oak_timber_frame',
    'structurize:side_framed_horizontal_oak_oak_timber_frame',
    'structurize:clay_oak_shingle',
    'structurize:clay_shingle_slab',
    'tconstruct:crafting_station',
    'tconstruct:tinker_station',
    'tconstruct:part_builder',
    'tconstruct:tinkers_anvil',
    'tconstruct:scorched_anvil',
    'chipped:botanist_workbench',
    'chipped:glassblower',
    'chipped:carpenters_table',
    'chipped:loom_table',
    'chipped:mason_table',
    'chipped:alchemy_bench',
    'chipped:mechanist_workbench'
  ])
})
