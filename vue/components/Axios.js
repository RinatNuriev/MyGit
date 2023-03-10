export default {
    name: 'Axios',
    data() {
        return {
            info: ''
        }
    },
    mounted() {
        axios
          .get('/connect.php')
          .then(response => (this.info = response.data.info[0].mail));
      },
    template: `<div class="block2">
    <h1>Axios test</h1>
    <h2 id="test">{{info}}</h2>
    </div>`
}

