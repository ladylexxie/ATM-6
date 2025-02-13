onEvent('block.left_click', e => {
  let hammer = e.getBlock()
  let anvil = hammer.getDown().getDown()
  let bedrock = anvil.getDown()
  if (hammer == 'mythicbotany:mjoellnir') {
    if (anvil == 'minecraft:anvil') {
      if (bedrock == 'minecraft:bedrock') {
        let entities = e.world.getEntitiesWithin(AABB.ofBlock(hammer.getDown().getPos()))
        let frame

        entities.forEach(entity => {
          if (entity.isFrame()) {
            frame = entity
            return
          }
        })

        if (frame.getItem() == 'atmadditions:atm_star') {
          frame.setItem('minecraft:air')
          e.world.spawnLightning(anvil.x, anvil.y, anvil.z, true)
          frame.kill()

          e.server.schedule(1000, () => {
            e.server.runCommandSilent(`/summon minecraft:item ${anvil.x} ${anvil.y + 1} ${anvil.z} {Item:{id:"atmadditions:atm_star_shard",Count:5}}`)
          }).call()
        }
      }
    }
  }
})