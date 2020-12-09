#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(binding = 1) uniform sampler2D texSampler;

layout(location = 0) in vec2 fragTexCoord;
layout(location = 1) in vec3 vertPos;
layout(location = 2) in vec3 normalInterp;

layout(location = 0) out vec4 outColor;



/*
const vec3 lightPos = vec3(1.0, 1.0, 1.0);
const vec3 lightColor = vec3(1.0, 1.0, 1.0);
const float lightPower = 0.5;
const vec3 ambientColor = vec3(1.0, 1.0, 1.0);
const vec3 diffuseColor = vec3(1.0 ,1.0, 1.0);
const vec3 specColor = vec3(0.2880, 0.2880 ,0.2880);
const float shininess = 0.8;

*/
void main() {/*
	  vec3 normal = normalize(normalInterp);
  vec3 lightDir = lightPos - vertPos;
  float distance = length(lightDir);
  distance = distance * distance;
  lightDir = normalize(lightDir);
    float lambertian = max(dot(lightDir, normal), 0.0);
  float specular = 0.0	;
  vec3 viewDir = normalize(-vertPos);


       
  vec3 reflectDir = reflect(-lightDir, normal);
       float specAngle = max(dot(reflectDir, viewDir), 0.0);
      specular = pow(specAngle, shininess/28.0000	);
  vec3 colorLinear = ambientColor* lightColor +diffuseColor * lambertian * lightColor * lightPower / distance
  +specColor * specular * lightColor * lightPower / distance;
					 
 */
    //outColor = vec4(specColor * specular * lightColor * lightPower ,1.0);
	// outColor = vec4(0.0,0.0,100000.0,1.0);
outColor = texture(texSampler, fragTexCoord);
}




