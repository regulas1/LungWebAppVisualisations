<script>
import * as Zinc from 'zincjs'

export default {
    name: 'ZincRenderer',
    data () {
        return {
        zincRenderer: null,
        }
    },
    methods: {
        
        zincRenderer = new Zinc.Renderer()
    }
}
</script>