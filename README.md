Gerenciador de Finanças Pessoais

Uma aplicação para ajudar usuários a controlar seus gastos e receitas de forma
simples e visual.

• Título do Projeto: Minhas Finanças: Controle Financeiro Pessoal
• Escopo do Projeto:

o Descrição: O sistema será uma aplicação web para que os usuários
possam registrar e categorizar suas despesas e receitas diárias. A
plataforma permitirá a criação de orçamentos mensais por categoria (ex:
R$ 500 para alimentação) e exibirá relatórios e gráficos intuitivos que
ajudam o usuário a visualizar para onde seu dinheiro está indo. O
objetivo principal é fornecer uma ferramenta clara e objetiva para o
planejamento financeiro pessoal, auxiliando na tomada de decisões e na
conquista de metas financeiras.

o Entidades Principais:

▪ Usuário: O dono das contas e transações.

▪ Conta: Representa onde o dinheiro está (ex: "Carteira", "Conta
Corrente").

▪ Transação: Um registro de uma receita ou despesa, com valor,
data e categoria.

▪ Categoria: Classificação da transação (ex: "Moradia",
"Transporte", "Salário").

▪ Orçamento: Um limite de gasto mensal definido pelo usuário para
uma determinada categoria.

o Funcionalidades:

▪ Frontend:

• Dashboard principal com um resumo do mês: total de
receitas, despesas e saldo atual.

• Gráficos visuais (ex: gráfico de pizza para despesas por
categoria).

• Formulário rápido para adicionar novas transações.

• Tela para visualizar o histórico de transações com filtros
por data ou categoria.

• Página para criar e acompanhar o progresso dos
orçamentos mensais.

▪ Backend:

• API RESTful segura para CRUD de contas, transações,
categorias e orçamentos.

• Autenticação de usuário para garantir a privacidade dos
dados.

• Endpoints específicos para calcular e fornecer os dados
agregados para os gráficos do dashboard.

• Validação de dados no servidor (ex: valores devem ser
numéricos).

o Público-Alvo: Qualquer pessoa que deseje ter um controle maior sobre
suas finanças pessoais, especialmente estudantes e jovens
profissionais.