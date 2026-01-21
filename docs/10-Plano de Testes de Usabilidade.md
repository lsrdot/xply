# Plano de Testes de Usabilidade

## 1) Objetivo:

O presente teste busca avaliar três pontos fulcrais na utilização do aplicativo XPly:

1) Verificar a intuitividade do layout da aplicação e como isto irá influenciar na navegabilidade do aplicativo e
   identificar pontos de confusão no fluxo de tarefas básicas do sistema
2) Testar a efetividade do timer Pomodoro na gestão do tempo e manutenção da produtividade, validar os mecanismos de
   bloqueio de distrações e verificar a precisão dos registros de produtividade
3) Coletar impressões sobre a satisfação geral do usuário ao utilizar o sistema e detectar
   oportunidades usuários de melhoria no UX/UI.

## 2) Participantes:

Serão submetidos ao teste do sistema de 5-10 usuários representativos do público alvo, sendo esses usuários
compreendidos por diversidade de gênero e faixas etárias

## 3) Método de Avaliação:

A avaliação de usabilidade do XPly será realizada por análise quantitativa (métricas de desempenho) e
qualitativa (comportamento e percepção do usuário).

O teste seŕa monitorado enquanto o usuário realizada tarefas críticas do sistema como, por
exemplo, o cadastro de novos usuários e utilização do timer Pomodoro. As tarefas serão realizadas enquanto um moderador
do teste registra o tempo para execução das ações do usuário e realiza a gravação das interações dos participantes.

Os usuários também serão submetidos a um questionário ao final do teste conforme a escala Likert (1 - 5) sobre a
eficiência, satisfação e as dores identificadas ao utilizar o sistema pelo link: https://forms.gle/WHeYTsw4Fgva4qe86

## 4) Critérios de Avaliação de Sucesso:

Visamos atingir pelo menos 85% de avaliações positivas referentes aos questionamentos aplicados ao final do teste
via formulário submetido aos participantes. Assim como a avaliação do cumprimento dos seguintes requisitos:

| Requisito  | Tarefa para Teste                          | Critério de Sucesso                                                       | Métrica de Avaliação       | Prioridade |
|------------|--------------------------------------------|---------------------------------------------------------------------------|----------------------------|------------|
| **RF-001** | Realizar cadastro de novo usuário          | Cadastro concluído em ≤ 1 minuto sem erros                                | Taxa de sucesso ≥ 95%      | ALTA       |
| **RF-002** | Editar dados cadastrais                    | Alterações salvas corretamente                                            | 100% de funcionalidade     | ALTA       |
| **RF-003** | Realizar login com credenciais válidas     | Acesso garantido em ≤ 25 segundos                                         | Tempo médio ≤ 15s          | ALTA       |
| **RF-004** | Recuperar senha via e-mail                 | Link de recuperação recebido e funcional                                  | Taxa de entrega 100%       | ALTA       |
| **RF-005** | Criar e gerenciar tarefas/iniciar Pomodoro | Timer inicia sem falhas                                                   | Sucesso em 100% dos testes | ALTA       |
| **RF-006** | Concluir tarefas                           | Status atualizado imediatamente                                           | Latência ≤ 3 s             | ALTA       |
| **RF-007** | Visualizar mapa de conquistas              | Carregamento dos dados em tempo inferior a 4s                             | Taxa de sucesso ≥ 90%      | MÉDIA      |
| **RF-008** | Visualizar barra de XP e nível             | Dados exibidos corretamente                                               | Precisão 100%              | MÉDIA      |
| **RF-009** | Visualizar insígnias e troféus             | Listagem completa das conquistas sem erros                                | Sucesso ≥ 85%              | MÉDIA      |
| **RF-010** | Abrir mapa de conquistas                   | Carregamento dos dados de forma ordenada e prática em tempo inferior a 4s | Taxa de sucesso ≥ 70%      | BAIXA      |

## 5) Análise dos Resultados:

Com o intuíto de realizar melhorias sistêmicas, serão identificados os principais pontos de dificuldades encontrados
durante a utilização do sistema para realização de ajustes procedurais através da análise dos registros das interações
dos usuários. A análise será realizada com base nos dados colhidos através do formulário submetido aos participantes da
avaliação em conjunto às informações registradas pelos mediadores dos testes.

## 6) Cronograma:

| Fase         | Período                 | Duração   |
|--------------|-------------------------|-----------|
| Planejamento | 03/02/2025 - 20/03/2025 | 6 semanas |
| Execução     | 20/03/2025 - 25/05/2025 | 9 semanas |
| Análise      | 25/05/2025 - 10/06/2025 | 2 semanas |