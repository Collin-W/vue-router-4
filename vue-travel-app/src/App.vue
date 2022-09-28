<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/hawaii">Hawaii</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
    </div>
    <!-- router link is used for user nav in this app 
a tags will refresh the page when the link tag will not 
router-link is fast

router-link for intrenal links and a tag for external links-->

    <div class="container">
      <!-- router veiw always renderes content of the active page, it renders the matched comp to a given path 
  
  ao depending on your url that comp linked will render-->

      <router-veiw></router-veiw>
    </div>
  </div>
</template>

<script></script>
