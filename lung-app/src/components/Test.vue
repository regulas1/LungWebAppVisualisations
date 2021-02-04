<script>
import {
    computedFEV1,
    calculateFEVData, 
    updateFEV1Plot, 
    addSeriesFEV1Plot, 
    initFEV1Plot,
    clickButton,
    resetUniforms,
    loadGraph,
    updateMarkers,
    updateFrame, 
    startLoading, 
    stopLoading, 
    setLoadingText, 
    setScene, 
    loadScene, 
    loadModels, 
    toBufferGeometry,
    WEBGL
} from './bmj/js/test.js'

export default {
    name: 'LungModel',
    data: function() {
        return {
            WEBGL
        }
    },
    methods: {
        computedFEV1,
        calculateFEVData, 
        updateFEV1Plot, 
        addSeriesFEV1Plot, 
        initFEV1Plot,
        clickButton,
        resetUniforms,
        loadGraph,
        updateMarkers,
        updateFrame, 
        startLoading, 
        stopLoading, 
        setLoadingText,  
        setScene, 
        loadScene, 
        loadModels, 
        toBufferGeometry,
    }
}
</script>