<script setup>

import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import {  ClockIcon, ListBulletIcon, ChartBarIcon} from '@heroicons/vue/24/outline'

const navItems = ['timeline', 'activities', 'progress']

</script>

<template>
  
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a href="/">
      <img src="./assets/img/logo.png" class="h-9" alt="logo">
    </a>
    <a href="" class="text-sm">

      <div v-if="false" class="flex items-center gap-1">
        Day Complete!
      <CheckCircleIcon class="h-7 text-green-500"/>
    </div>

    <div v-else class="flex items-center gap-1">

        Progress: <span class="font-mono"> 20%</span>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>

    </div>

    </a>
  </header>

  <main class="flex flex-grow glex-col">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit pariatur sed eligendi odio voluptate autem cumque praesentium eos adipisci corporis numquam dolorum deserunt inventore at quibusdam atque, excepturi exercitationem accusantium vel fugit eius cupiditate quia. Nostrum ducimus eligendi vitae omnis, nulla corporis aliquid amet eius velit illo perferendis fuga, maxime exercitationem nihil. Necessitatibus neque aspernatur aperiam voluptate harum optio, corporis consequuntur nostrum? Ducimus, vitae debitis repellendus molestiae tempore, corporis unde odit impedit animi deserunt explicabo voluptates libero eos voluptatibus a culpa corrupti! Ullam hic nostrum vel eligendi doloribus laboriosam iste maxime explicabo est obcaecati? Quam laborum odio molestias voluptas fugit distinctio, facilis obcaecati assumenda cumque mollitia, rerum, nesciunt aspernatur repellat deserunt magni illo officiis quibusdam. Quam consequuntur et est atque placeat. Non nam numquam, dolore dolorem alias accusantium minus fugit sunt tenetur aut commodi eaque labore dolor. Corrupti quidem error laborum voluptas fuga commodi facilis sit aliquam eum, sequi quo, laudantium molestiae unde suscipit sint veritatis a officiis aut excepturi corporis. Iure sed natus eaque ipsam debitis porro nemo, vel eligendi magnam saepe assumenda tempore qui fugiat laudantium quisquam corporis et at necessitatibus? Id sint est sequi quia, similique ad enim accusantium recusandae dolor facere a! Nam at magnam quibusdam qui non sequi vitae tenetur assumenda fugit labore necessitatibus quidem, voluptatum rerum, mollitia minima, amet accusamus ratione provident expedita laboriosam eveniet maxime eligendi consequuntur. Explicabo consequuntur velit, doloremque labore dignissimos voluptate aperiam consequatur animi ratione excepturi error magnam neque enim et necessitatibus provident iusto soluta ullam qui alias ducimus repudiandae iure. Doloribus cupiditate non eius ipsa numquam officiis mollitia odit. Dolorem, asperiores. Dignissimos ad iste vel soluta molestias, qui nulla unde ducimus hic temporibus doloribus adipisci animi. Voluptate nulla magnam nam sint velit quidem facilis dolorem cum dolores aliquam qui incidunt voluptates unde, nihil labore delectus ratione id, possimus consectetur, explicabo quibusdam architecto quisquam at! Labore, alias ad. Laudantium hic numquam molestiae doloribus amet totam blanditiis facilis mollitia ad suscipit, consectetur ullam commodi vero voluptatem itaque minus modi eveniet! Vel veritatis eaque eos omnis at aperiam deleniti delectus distinctio. Enim iure libero nemo nostrum earum odit ad, maiores vitae itaque, molestiae fugit cupiditate laboriosam reprehenderit. Voluptates ducimus ea dicta vel in dolorem voluptas ex. Harum inventore blanditiis rem nam vitae aspernatur, sint explicabo sit nisi vel quam eum hic veniam similique cumque, eaque veritatis neque ipsam error! Iusto doloremque consequuntur excepturi tempora sapiente consectetur soluta repellendus, perspiciatis ipsa voluptate maiores nisi saepe qui cum praesentium sint recusandae velit fuga. At, doloremque animi? Assumenda, obcaecati! Dolorem porro quia laboriosam nihil, minima dicta, culpa ex voluptas atque natus nisi quos neque quod incidunt quidem voluptatem, totam vero animi ipsam reiciendis perferendis maiores. Ab dolorum harum non cupiditate dolore nihil rerum sequi error nostrum qui provident minima vitae quos ipsam porro optio eos, perspiciatis doloremque, laudantium mollitia, facilis voluptatem molestias. Sapiente laborum eligendi culpa exercitationem quod doloremque laudantium omnis modi similique, sunt alias minima optio labore a doloribus accusamus delectus aspernatur adipisci ut aperiam voluptatibus possimus rerum nostrum deserunt! Beatae, recusandae minus.
  </main>

  <nav class="sticky bottom-0 z-10 bg-white text-3xl">

    <ul class="flex items-center justify-around border-t">

      <li v-for="page in navItems" :key="page" class="flex-1">

        <a :href="`#${page}`"  class="flex flex-col items-center p-2 text-xs capitalize" >

        <ClockIcon v-if="page === 'timeline'" class="w-6 h-6"/>
        <ListBulletIcon v-else-if="page === 'activities'" class="w-6 h-6"/>
        <ChartBarIcon v-else class="w-6 h-6"/>{{ page }}
        
      </a>

    </li>

    </ul>

  </nav>

</template>
