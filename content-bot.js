// 🤖 IAWebPro Content Bot - Generador Automático de Contenido
// Genera posts, stories y captions para Instagram automáticamente

class ContentBot {
    constructor() {
        this.services = {
            'web-profesional': {
                name: 'Páginas Web Profesionales',
                icon: '💻',
                keywords: ['responsive', 'profesional', 'conversiones', 'pagos integrados'],
                benefits: [
                    'Aumenta credibilidad de tu negocio',
                    'Disponible 24/7 para tus clientes',
                    'Procesamiento de pagos automático',
                    'Optimizada para móviles',
                    'Carga súper rápida'
                ]
            },
            'landing-pages': {
                name: 'Landing Pages Estratégicas',
                icon: '⚡',
                keywords: ['conversión', 'campaña', 'leads', 'estratégica'],
                benefits: [
                    'Hasta 5x más conversiones',
                    'Perfecta para campañas publicitarias',
                    'Diseño enfocado en acción',
                    'Email marketing integrado',
                    'A/B testing incluido'
                ]
            },
            'chatbots': {
                name: 'Chatbots Inteligentes',
                icon: '🤖',
                keywords: ['24/7', 'automático', 'WhatsApp', 'inteligente'],
                benefits: [
                    'Atiende clientes las 24 horas',
                    'Nunca pierde una oportunidad',
                    'Califica leads automáticamente',
                    'Reduce carga de trabajo manual',
                    'Respuestas instantáneas'
                ]
            },
            'automatizacion': {
                name: 'Automatización Multicanal',
                icon: '🔗',
                keywords: ['centralizado', 'eficiencia', 'multicanal', 'gestión'],
                benefits: [
                    'Un solo lugar para todo',
                    'Recordatorios automáticos',
                    'Seguimiento inteligente',
                    'Ahorra 10+ horas semanales',
                    'Nunca olvida un cliente'
                ]
            },
            'contenido-digital': {
                name: 'Contenido Digital',
                icon: '🎨',
                keywords: ['visual', 'marca', 'redes sociales', 'consistente'],
                benefits: [
                    'Presencia visual profesional',
                    'Contenido siempre listo',
                    'Identidad de marca consistente',
                    'Más engagement orgánico',
                    'Posts que convierten'
                ]
            }
        };

        this.contentTypes = {
            'tip': 'Tip educativo',
            'case-study': 'Caso de éxito',
            'benefit': 'Beneficio del servicio',
            'problem-solution': 'Problema y solución',
            'testimonial': 'Testimonio/resultado',
            'behind-scenes': 'Detrás de escenas',
            'motivational': 'Motivacional',
            'comparison': 'Antes vs después'
        };

        this.callToActions = [
            '👆 Link en bio para cotización gratuita',
            '💬 Envíanos DM para más información',
            '🔗 Link en bio para empezar',
            '✨ Comenta "INFO" para detalles',
            '👇 Link en bio para solicitar propuesta',
            '📱 WhatsApp al link en bio',
            '🎯 Link en bio para transformar tu negocio',
            '💼 Solicita cotización en link de bio'
        ];
    }

    // Generar contenido automáticamente
    generateContent(serviceKey, contentType = 'random') {
        const service = this.services[serviceKey];
        if (!service) return null;

        if (contentType === 'random') {
            const types = Object.keys(this.contentTypes);
            contentType = types[Math.floor(Math.random() * types.length)];
        }

        const generators = {
            'tip': () => this.generateTip(service),
            'case-study': () => this.generateCaseStudy(service),
            'benefit': () => this.generateBenefit(service),
            'problem-solution': () => this.generateProblemSolution(service),
            'testimonial': () => this.generateTestimonial(service),
            'behind-scenes': () => this.generateBehindScenes(service),
            'motivational': () => this.generateMotivational(service),
            'comparison': () => this.generateComparison(service)
        };

        return generators[contentType]();
    }

    generateTip(service) {
        const tips = {
            'web-profesional': [
                'Tu página web debe cargar en menos de 3 segundos o perderás 70% de visitantes',
                'El 85% de personas juzga la credibilidad de tu negocio por el diseño web',
                'Una página responsive aumenta conversiones en 15%',
                'Los formularios simples convierten 300% más que los complicados'
            ],
            'landing-pages': [
                'Una landing page enfocada convierte 5x más que una página general',
                'El headline es lo más importante: 80% decide si seguir leyendo en 3 segundos',
                'Los testimonios aumentan conversiones en 34%',
                'Un solo CTA (call to action) funciona mejor que múltiples opciones'
            ],
            'chatbots': [
                'Los chatbots responden 24/7 cuando tú duermes - nunca pierdes un cliente',
                'El 67% de consumidores prefiere chatbots para consultas rápidas',
                'Un chatbot bien configurado califica leads automáticamente',
                'Los chatbots reducen tiempo de respuesta de horas a segundos'
            ],
            'automatizacion': [
                'La automatización te ahorra mínimo 10 horas por semana',
                'Centralizar mensajes aumenta velocidad de respuesta en 300%',
                'Los recordatorios automáticos recuperan 40% de clientes perdidos',
                'Un sistema automatizado nunca olvida hacer seguimiento'
            ],
            'contenido-digital': [
                'La consistencia visual aumenta reconocimiento de marca en 80%',
                'Posts con diseño profesional obtienen 6x más engagement',
                'Las marcas consistentes crecen 20% más rápido',
                'El contenido visual se comparte 40x más que solo texto'
            ]
        };

        const tip = tips[service.name] ? 
            tips[service.name][Math.floor(Math.random() * tips[service.name].length)] :
            tips['web-profesional'][0];

        return {
            type: 'tip',
            service: service.name,
            content: `💡 TIP ${service.icon} ${service.name.toUpperCase()}

${tip}

¿Sabías esto? ${service.icon}

${this.getRandomCTA()}

#TipsDigitales #${service.keywords[0]} #MarketingDigital #Emprendedores #IAWebPro`,
            hashtags: this.generateHashtags(service),
            visualSuggestion: `Infografía con el tip destacado y estadística principal`
        };
    }

    generateCaseStudy(service) {
        const cases = {
            'web-profesional': {
                client: 'Restaurante local',
                before: 'Solo recibía pedidos por teléfono',
                after: 'Sistema de pedidos online 24/7',
                result: '+200% en ventas nocturnas'
            },
            'chatbots': {
                client: 'Clínica dental',
                before: 'Perdía citas por no responder a tiempo',
                after: 'Chatbot agenda citas automáticamente',
                result: '+150% en citas programadas'
            }
        };

        const defaultCase = cases[service.name] || cases['web-profesional'];

        return {
            type: 'case-study',
            service: service.name,
            content: `📈 CASO DE ÉXITO ${service.icon}

Cliente: ${defaultCase.client}

❌ ANTES:
${defaultCase.before}

✅ DESPUÉS:
${defaultCase.after}

🎯 RESULTADO:
${defaultCase.result}

¿Te suena familiar el "ANTES"?

${this.getRandomCTA()}

#CasoDeExito #ResultadosReales #${service.keywords[0]} #TransformacionDigital`,
            hashtags: this.generateHashtags(service),
            visualSuggestion: `Antes/Después con estadísticas destacadas`
        };
    }

    generateBenefit(service) {
        const benefit = service.benefits[Math.floor(Math.random() * service.benefits.length)];
        
        return {
            type: 'benefit',
            service: service.name,
            content: `✨ ¿POR QUÉ NECESITAS ${service.name.toUpperCase()}? ${service.icon}

🎯 Beneficio principal:
${benefit}

Esto significa:
• Más tiempo para ti
• Más clientes satisfechos  
• Más ingresos consistentes
• Menos estrés diario

¿Listo para este cambio?

${this.getRandomCTA()}

#Beneficios #${service.keywords[0]} #CrecimientoDigital #Emprendedores`,
            hashtags: this.generateHashtags(service),
            visualSuggestion: `Beneficio destacado con iconos y colores de marca`
        };
    }

    generateProblemSolution(service) {
        const problems = {
            'web-profesional': 'Clientes no confían en tu negocio sin página web',
            'chatbots': 'Pierdes clientes cuando no puedes responder inmediatamente',
            'automatizacion': 'Gastas demasiado tiempo en tareas repetitivas',
            'contenido-digital': 'Tus redes sociales se ven poco profesionales'
        };

        const problem = problems[service.name] || problems['web-profesional'];

        return {
            type: 'problem-solution',
            service: service.name,
            content: `🚨 PROBLEMA COMÚN EN TU NEGOCIO:

❌ ${problem}

✅ NUESTRA SOLUCIÓN:
${service.name} ${service.icon}

Con esto lograrás:
${service.benefits.slice(0, 3).map(b => `• ${b}`).join('\n')}

¿Te está pasando esto?

${this.getRandomCTA()}

#ProblemasSolucionados #${service.keywords[0]} #ServiciosDigitales #IAWebPro`,
            hashtags: this.generateHashtags(service),
            visualSuggestion: `Problema tachado → Solución destacada con check`
        };
    }

    generateMotivational(service) {
        const motivational = [
            'El mejor momento para digitalizarse fue ayer. El segundo mejor momento es AHORA.',
            'Mientras tu competencia duerme, tu negocio digital está trabajando.',
            'No esperes a tener tiempo. Los sistemas automáticos te dan más tiempo.',
            'Tu próximo cliente está buscándote en Google ahora mismo.',
            'La diferencia entre soñar y lograr es EJECUTAR.'
        ];

        const quote = motivational[Math.floor(Math.random() * motivational.length)];

        return {
            type: 'motivational',
            service: service.name,
            content: `💪 MOTIVACIÓN DEL DÍA

"${quote}"

${service.icon} ${service.name} te ayuda a ejecutar esa transformación digital que necesitas.

¿Qué estás esperando?

${this.getRandomCTA()}

#Motivacion #TransformacionDigital #Emprendedores #AccionAhora #IAWebPro`,
            hashtags: this.generateHashtags(service),
            visualSuggestion: `Quote motivacional con fondo inspirador`
        };
    }

    generateComparison(service) {
        const comparisons = {
            'web-profesional': {
                before: ['Sin página web', 'Clientes desconfían', 'Solo ventas presenciales', 'Horario limitado'],
                after: ['Sitio profesional', 'Credibilidad automática', 'Ventas 24/7', 'Alcance global']
            },
            'chatbots': {
                before: ['Respuestas lentas', 'Clientes abandonan', 'Trabajo manual', 'Errores humanos'],
                after: ['Respuesta instantánea', 'Retención alta', 'Automatización total', 'Consistencia perfecta']
            }
        };

        const comp = comparisons[service.name] || comparisons['web-profesional'];

        return {
            type: 'comparison',
            service: service.name,
            content: `⚖️ ANTES vs DESPUÉS DE ${service.name.toUpperCase()} ${service.icon}

❌ ANTES:
${comp.before.map(item => `• ${item}`).join('\n')}

✅ DESPUÉS:
${comp.after.map(item => `• ${item}`).join('\n')}

La diferencia es clara, ¿no?

${this.getRandomCTA()}

#AntesVsDespues #TransformacionDigital #${service.keywords[0]} #ResultadosReales`,
            hashtags: this.generateHashtags(service),
            visualSuggestion: `Split screen: Antes (triste) vs Después (exitoso)`
        };
    }

    generateHashtags(service) {
        const baseHashtags = ['#IAWebPro', '#ServiciosDigitales', '#MarketingDigital', '#Emprendedores'];
        const serviceHashtags = service.keywords.map(k => `#${k.replace(/\s/g, '')}`);
        return [...baseHashtags, ...serviceHashtags].join(' ');
    }

    getRandomCTA() {
        return this.callToActions[Math.floor(Math.random() * this.callToActions.length)];
    }

    // Generar contenido para Stories
    generateStoryContent(serviceKey) {
        const service = this.services[serviceKey];
        const storyTypes = ['question', 'tip', 'behind-scenes', 'poll'];
        const type = storyTypes[Math.floor(Math.random() * storyTypes.length)];

        const generators = {
            'question': () => ({
                type: 'question',
                content: `¿Sabías que ${service.benefits[0].toLowerCase()}?`,
                sticker: 'question',
                background: 'gradient'
            }),
            'tip': () => ({
                type: 'tip',
                content: `TIP: ${service.benefits[Math.floor(Math.random() * service.benefits.length)]}`,
                sticker: 'none',
                background: 'brand-colors'
            }),
            'poll': () => ({
                type: 'poll',
                content: `¿Tu negocio necesita ${service.name}?`,
                options: ['¡Sí, urgente!', 'Estoy pensándolo'],
                background: 'solid'
            })
        };

        return generators[type]();
    }

    // Calendario de contenido automático
    generateContentCalendar(days = 7) {
        const services = Object.keys(this.services);
        const calendar = [];

        for (let day = 0; day < days; day++) {
            const serviceKey = services[day % services.length];
            const contentTypes = ['tip', 'benefit', 'problem-solution', 'case-study', 'motivational'];
            const contentType = contentTypes[day % contentTypes.length];

            calendar.push({
                day: day + 1,
                date: new Date(Date.now() + day * 24 * 60 * 60 * 1000).toDateString(),
                service: serviceKey,
                post: this.generateContent(serviceKey, contentType),
                stories: [
                    this.generateStoryContent(serviceKey),
                    this.generateStoryContent(serviceKey)
                ]
            });
        }

        return calendar;
    }
}

// Inicializar el bot
const contentBot = new ContentBot();

// Función para generar contenido fácilmente
function generateDailyContent() {
    const services = ['web-profesional', 'landing-pages', 'chatbots', 'automatizacion', 'contenido-digital'];
    const randomService = services[Math.floor(Math.random() * services.length)];
    
    return {
        post: contentBot.generateContent(randomService),
        stories: [
            contentBot.generateStoryContent(randomService),
            contentBot.generateStoryContent(randomService)
        ]
    };
}

// Exportar para uso
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ContentBot, generateDailyContent };
}

console.log('🤖 IAWebPro Content Bot inicializado correctamente');
console.log('📅 Generando contenido para los próximos 7 días...');

// Ejemplo de uso
const weeklyContent = contentBot.generateContentCalendar(7);
console.log('✅ Calendario de contenido generado:', weeklyContent);