---tile OEE & Efficiency Analytics 🧵🤖

Este repositório contém uma solução de Análise de Eficiência e Inteligência Industrial aplicada ao setor têxtil. O sistema monitora, processa e extrai KPIs críticos de maquinários industriais (como teares, fiações e tinturarias), calculando o OEE (Overall Equipment Effectiveness) e preparando os dados para modelos preditivos de Inteligência Artificial voltados à manutenção preventiva e otimização de gargalos.

📌 Visão Geral do Projeto

Na manufatura têxtil moderna, a latência de dados e a falta de visibilidade sobre o maquinário causam perdas massivas de produtividade. Esta solução visa:

Ingetar e Processar dados de telemetria de sensores de produção.

Calcular KPIs em Tempo Real de forma vetorizada usando Pandas (Disponibilidade, Qualidade e OEE).

Identificar Gargalos e gerar insights gerenciais automatizados.

Estruturar pipelines robustos prontos para o treinamento de modelos de Machine Learning (ex: detecção de anomalias e previsão de falhas mecânicas).

🏗️ Arquitetura de Dados & Fluxo

[Sensores/IoT] ──> [Pipeline de Ingestão] ──> [Processamento Pandas (Vetorizado)]
                                                        │
                      ┌─────────────────────────────────┴────────────────────────────────┐
                      ▼                                                                  ▼
          [Cálculo de KPIs & OEE]                                            [Features para Modelos IA]
                      │                                                                  │
                      ▼                                                                  ▼
         [Relatórios Gerenciais]                                            [Manutenção Preditiva (ML)]


🛠️ Tecnologias e Requisitos

Requisitos do Sistema

Python 3.10 ou superior.

Gerenciador de pacotes pip ou conda.

Principais Bibliotecas Utilizadas

Pandas (v2.0+): Processamento de dados de alta performance e manipulação de séries temporais.

NumPy: Computação matemática vetorizada eficiente para cálculo de KPIs estruturados.

Scikit-Learn (Opcional - para IA): Futura integração com modelos de regressão e clustering para estimativa de falhas.

⚙️ Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento local:

1. Clonar o Repositório

git clone [https://github.com/seu-usuario/textile-efficiency-analytics.git](https://github.com/seu-usuario/textile-efficiency-analytics.git)
cd textile-efficiency-analytics


2. Criar e Ativar Ambiente Virtual

Recomenda-se o uso de um ambiente isolado (virtual environment) para evitar conflitos de dependências:

No Linux/macOS:

python -m venv venv
source venv/bin/activate


No Windows (PowerShell):

python -m venv venv
.\venv\Scripts\Activate.ps1


3. Instalar as Dependências

Com o ambiente virtual ativo, instale os pacotes necessários:

pip install -r requirements.txt


Nota: Caso não possua o arquivo requirements.txt gerado, você pode instalar as bibliotecas principais manualmente:

pip install pandas numpy


🚀 Guia de Uso

O script principal está estruturado de forma modular para fácil execução e integração com orquestradores de dados (como Apache Airflow ou Prefect).

Executar a Análise Base

Para rodar a simulação de dados industriais, processamento e visualização de KPIs no terminal, execute:

python analise_producao_textil.py


Exemplo de Estrutura de Entrada de Dados (IoT/Sensores)

O pipeline aceita registros estruturados contendo:

data_registro: Timestamp da leitura do sensor.

maquina_id: Identificador único do ativo físico.

tipo_maquina: Categoria (Tear, Fiação, Tinturaria).

horas_planejadas: Tempo total de turno planejado.

horas_operacao: Tempo real ativo do maquinário.

pecas_produzidas: Volume total de tecido/peças geradas.

pecas_defeituosas: Volume de peças descartadas no controle de qualidade.

🧠 Integração com Inteligência Artificial (Próximos Passos)

O dataset gerado por este pipeline de dados já está normalizado e preparado para o desenvolvimento de modelos preditivos:

Detecção de Anomalias (Isolation Forest / Autoencoders): Identificar quedas bruscas de produtividade (pecas_por_hora) que possam indicar desgaste de componentes mecânicos antes de uma quebra total.

Previsão de OEE (Modelos Regressivos - XGBoost / LSTM): Prever a eficiência das próximas semanas com base no histórico de manutenção e sazonalidade têxtil.

Classificação de Qualidade (Classificadores Multiclasse): Antever picos de pecas_defeituosas correlacionando o lote de matéria-prima com o desgaste operacional da máquina.

🤝 Contribuição

Contribuições são extremamente bem-vindas! Se você deseja otimizar o algoritmo de OEE, adicionar novas métricas ou integrar novos modelos de IA:

Faça um Fork do projeto.

Crie uma Branch para sua feature (git checkout -b feature/NovaFeature).

Dê um Commit nas suas alterações (git commit -m 'Adiciona nova feature').

Faça o Push para a Branch (git push origin feature/NovaFeature).

Abra um Pull Request.

📄 Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter mais detalhes.