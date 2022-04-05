
import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: {
                url: 'http://50.28.102.144:8080/auth/',
                realm: 'rdl',
                clientId: 'client-rdl2',
            },
            initOptions: {
                checkLoginIframe: true,
                checkLoginIframeInterval: 25
            },
            loadUserProfileAtStartUp: true
        });
}
