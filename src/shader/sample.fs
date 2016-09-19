uniform float time;
varying vec4 vColor;


float timeMap (float time, float speed) {
    return sin(time * speed) * 0.5 + 0.5;
}

void main (void) {
    gl_FragColor = vec4(
        vColor[0] * timeMap(time, 1.0),
        vColor[1] * timeMap(time, 2.0),
        vColor[2] * timeMap(time, 3.0),
        1.0
    );
}
