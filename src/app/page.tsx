const photos = [
  "1.jpeg","3.jpeg","4.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg","11.jpeg",
  "12.jpeg","13.jpeg","14.jpeg","15.jpeg","17.jpeg","18.jpeg","19.jpeg","20.jpeg","21.jpeg"
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a href="#hero" className="brand">
          <img src="/images/1.png" alt="GBB Sports" />
        </a>

        <nav>
          <a href="#saude">Esporte e Saúde</a>
          <a href="#galeria">Fotos</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#pais">Pais</a>
        </nav>

        <a className="topCta" href="https://wa.me/5547988467208">
          Inscrições
        </a>
      </header>

      <section id="hero" className="hero">
        <div className="heroGlow" />

        <div className="heroText">
          <img className="heroLogo" src="/images/1.png" alt="GBB Sports" />

          <p className="eyebrow">Escolinha de Futebol e Handebol</p>

          <h1>
            Muito mais que treinos.
            <span> Formamos pessoas.</span>
          </h1>

          <p className="lead">
            A GBB Sports atende alunos do Colégio Adventista de Itajaí com atividades
            esportivas que desenvolvem saúde, disciplina, amizade e espírito de equipe.
          </p>

          <div className="actions">
            <a href="https://wa.me/5547988467208">Quero fazer parte</a>
            <a className="outline" href="#modalidades">Conhecer modalidades</a>
          </div>

          <div className="stats">
            <div><strong>2</strong><span>Modalidades</span></div>
            <div><strong>5–16</strong><span>Anos</span></div>
            <div><strong>CAIT</strong><span>Itajaí - SC</span></div>
          </div>
        </div>

        <div className="heroSlider">
          <div className="slideTrack">
            {photos.slice(0, 8).map((photo) => (
              <img key={photo} src={`/images/galeria/${photo}`} alt="GBB Sports" />
            ))}
          </div>
        </div>
      </section>

      <section id="saude" className="section light">
        <p className="sectionLabel">Esporte e desenvolvimento</p>
        <h2>O esporte transforma muito mais do que o corpo.</h2>
        <p className="sectionLead">
          A prática esportiva ajuda o aluno a criar rotina, lidar com desafios,
          respeitar regras, conviver melhor e desenvolver confiança.
        </p>

        <div className="benefits">
          <article><span>01</span><h3>Saúde</h3><p>Movimento, energia, coordenação e qualidade de vida.</p></article>
          <article><span>02</span><h3>Disciplina</h3><p>Compromisso com horários, treinos, regras e evolução.</p></article>
          <article><span>03</span><h3>Equipe</h3><p>Amizade, cooperação, respeito e convivência saudável.</p></article>
          <article><span>04</span><h3>Superação</h3><p>Aprender a persistir, melhorar e acreditar no próprio potencial.</p></article>
        </div>
      </section>

      <section id="galeria" className="section dark">
        <p className="sectionLabel blue">Galeria</p>
        <h2>Momentos que contam a nossa história.</h2>
        <p className="sectionLead muted">
          Treinos, jogos, encontros e experiências que fortalecem os alunos dentro e fora da quadra.
        </p>

        <div className="mosaic">
          {photos.map((photo, index) => (
            <figure key={photo} className={index % 5 === 0 ? "big" : ""}>
              <img src={`/images/galeria/${photo}`} alt="Turma GBB Sports" />
            </figure>
          ))}
        </div>
      </section>

      <section id="modalidades" className="modalidades">
        <div className="modText">
          <p className="sectionLabel">Modalidades</p>
          <h2>Futsal e Handebol para aprender, competir e crescer.</h2>
        </div>

        <article className="modCard">
          <img src="/images/galeria/1.jpeg" alt="Futsal GBB Sports" />
          <div>
            <p>Modalidade 01</p>
            <h3>Futsal</h3>
            <span>
              Desenvolve agilidade, coordenação, tomada de decisão, disciplina,
              visão de jogo e espírito coletivo.
            </span>
          </div>
        </article>

        <article className="modCard reverse">
          <img src="/images/galeria/7.jpeg" alt="Handebol GBB Sports" />
          <div>
            <p>Modalidade 02</p>
            <h3>Handebol</h3>
            <span>
              Estimula velocidade, força, cooperação, raciocínio rápido e trabalho em equipe
              de forma dinâmica e divertida.
            </span>
          </div>
        </article>
      </section>

      <section id="pais" className="parents">
        <div>
          <p className="sectionLabel">Para os pais</p>
          <h2>Mais do que atletas. Formamos pessoas.</h2>
          <p>
            A GBB Sports acredita que o esporte é uma ferramenta de formação.
            Cada treino é uma oportunidade para aprender respeito, responsabilidade,
            amizade, cooperação e superação.
          </p>
          <a href="https://wa.me/5547988467208">Falar com o Prof. André</a>
        </div>

        <img src="/images/galeria/21.jpeg" alt="GBB Sports" />
      </section>

      <footer id="contato">
        <img src="/images/1.png" alt="GBB Sports" />
        <h2>GBB Sports</h2>
        <p>Escolinha de esportes para alunos do Colégio Adventista de Itajaí.</p>
        <strong>Prof. André — (47) 98846-7208</strong>
        <small>© 2026 GBB Sports. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}
