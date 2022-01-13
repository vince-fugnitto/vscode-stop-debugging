import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    const disposables: vscode.Disposable[] = [];

    // Terminate first session.
    disposables.push(
        vscode.commands.registerCommand('vscode-stop-debugging.active', () => {
            const session = vscode.debug.activeDebugSession;
            if (session) {
                vscode.debug.stopDebugging(session);
            }
        })
    );

    // Terminate all sessions.
    disposables.push(
        vscode.commands.registerCommand('vscode-stop-debugging.all', () => {
            vscode.debug.stopDebugging();
        })
    );

    context.subscriptions.push(...disposables);
}

export function deactivate() {}
