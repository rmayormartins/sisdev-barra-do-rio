const { useState } = React;

const MapPin = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const TrendingUp = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const Package = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>;
const AlertCircle = ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
const Calendar = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const BarChart3 = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>;
const Map = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/></svg>;
const X = ({ size = 24 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const Search = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
const RefreshCw = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;
const Bell = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/></svg>;

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [filtroArmador, setFiltroArmador] = useState('todos');
  const [filtroStatus, setFiltroStatus] = useState('todos');
  const [busca, setBusca] = useState('');

  const depots = [
    { id: 1, nome: 'Depot Maersk Itajaí', armador: 'Maersk', localizacao: 'Itajaí - Cordeiros', capacidade: 85, tempoEspera: '15 min', status: 'disponivel' },
    { id: 2, nome: 'Depot Hamburg Sud Navegantes', armador: 'Hamburg Sud', localizacao: 'Navegantes - Centro', capacidade: 45, tempoEspera: '30 min', status: 'disponivel' },
    { id: 3, nome: 'Depot MSC Itajaí Porto', armador: 'MSC', localizacao: 'Itajaí - Porto', capacidade: 95, tempoEspera: '2h', status: 'ocupado' },
    { id: 4, nome: 'Depot CMA CGM Navegantes', armador: 'CMA CGM', localizacao: 'Navegantes - Vila Operária', capacidade: 68, tempoEspera: '45 min', status: 'parcial' },
    { id: 5, nome: 'Depot Hapag-Lloyd Itajaí', armador: 'Hapag-Lloyd', localizacao: 'Itajaí - São João', capacidade: 22, tempoEspera: '10 min', status: 'disponivel' },
    { id: 6, nome: 'Depot Cosco Navegantes Sul', armador: 'Cosco', localizacao: 'Navegantes - Gravatá', capacidade: 100, tempoEspera: '3h+', status: 'cheio' }
  ];

  const agendamentos = [
    { id: 1, container: 'MAEU1234567', armador: 'Maersk', importador: 'Portobello S.A.', data: '2025-10-11', status: 'confirmado' },
    { id: 2, container: 'MSCU9876543', armador: 'MSC', importador: 'Haco Etiquetas', data: '2025-10-11', status: 'aguardando' },
    { id: 3, container: 'HLCU5551234', armador: 'Hapag-Lloyd', importador: 'WEG Equipamentos', data: '2025-10-12', status: 'confirmado' }
  ];

  const alertas = [
    { tipo: 'critico', mensagem: 'Container MSCU9876543 - Free time expira em 6 horas', tempo: '1h atrás' },
    { tipo: 'atencao', mensagem: 'Depot MSC Itajaí Porto com capacidade crítica (95%)', tempo: '2h atrás' },
    { tipo: 'info', mensagem: 'Novo depot disponível: LogPark Navegantes', tempo: '5h atrás' }
  ];

  const depotsFiltrados = depots.filter(d => {
    const matchArmador = filtroArmador === 'todos' || d.armador === filtroArmador;
    const matchStatus = filtroStatus === 'todos' || d.status === filtroStatus;
    return matchArmador && matchStatus;
  });

  const agendamentosFiltrados = agendamentos.filter(a => 
    a.container.toLowerCase().includes(busca.toLowerCase()) ||
    a.importador.toLowerCase().includes(busca.toLowerCase())
  );

  const alertasCriticos = alertas.filter(a => a.tipo === 'critico').length;

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f9fafb'}}>
      <div style={{backgroundColor: '#003B71', color: 'white', padding: '24px'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px'}}>
          <div>
            <h1 style={{fontSize: '28px', fontWeight: '300', margin: 0}}>SISDEV - Barra do Rio</h1>
            <p style={{color: '#F39200', fontSize: '14px', marginTop: '4px'}}>Sistema de Gestão de Devoluções de Contêineres Vazios</p>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <button style={{position: 'relative', padding: '8px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white'}}>
              <Bell />
              {alertasCriticos > 0 && (
                <span style={{position: 'absolute', top: '-4px', right: '-4px', backgroundColor: '#ef4444', color: 'white', fontSize: '11px', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>
                  {alertasCriticos}
                </span>
              )}
            </button>
            <button style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'white'}}>
              <RefreshCw />
              <span style={{fontSize: '14px'}}>Atualizar</span>
            </button>
          </div>
        </div>
      </div>

      <div style={{backgroundColor: 'white', borderBottom: '1px solid #e5e7eb'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto'}}>
          <nav style={{display: 'flex', gap: 0, overflowX: 'auto'}}>
            {[
              { id: 'dashboard', icon: <BarChart3 />, label: 'Dashboard' },
              { id: 'agendamentos', icon: <Calendar />, label: 'Agendamentos' },
              { id: 'mapa', icon: <Map />, label: 'Mapa' },
              { id: 'marketplace', icon: <Package />, label: 'Marketplace' },
              { id: 'relatorios', icon: <TrendingUp />, label: 'Relatórios' }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 24px',
                  fontWeight: '500',
                  border: 'none',
                  borderBottom: activeTab === tab.id ? '2px solid #F39200' : '2px solid transparent',
                  backgroundColor: 'transparent',
                  color: activeTab === tab.id ? '#F39200' : '#6b7280',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '24px'}}>
        {activeTab === 'dashboard' && (
          <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px'}}>
                <div style={{textAlign: 'center'}}>
                  <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '8px'}}>Total Depots</p>
                  <p style={{fontSize: '36px', fontWeight: '300', color: '#1f2937', margin: 0}}>18</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '8px'}}>Disponíveis</p>
                  <p style={{fontSize: '36px', fontWeight: '300', color: '#10b981', margin: 0}}>8</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '8px'}}>Devoluções Hoje</p>
                  <p style={{fontSize: '36px', fontWeight: '300', color: '#003B71', margin: 0}}>47</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '8px'}}>Tempo Médio</p>
                  <p style={{fontSize: '36px', fontWeight: '300', color: '#F39200', margin: 0}}>42min</p>
                </div>
              </div>
            </div>

            <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '16px'}}>
                <h3 style={{fontSize: '18px', fontWeight: '500', margin: 0}}>Disponibilidade em Tempo Real</h3>
                <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                  <select value={filtroArmador} onChange={(e) => setFiltroArmador(e.target.value)} style={{fontSize: '14px', border: '1px solid #d1d5db', borderRadius: '6px', padding: '8px 12px'}}>
                    <option value="todos">Todos Armadores</option>
                    <option value="Maersk">Maersk</option>
                    <option value="MSC">MSC</option>
                  </select>
                  <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)} style={{fontSize: '14px', border: '1px solid #d1d5db', borderRadius: '6px', padding: '8px 12px'}}>
                    <option value="todos">Todos Status</option>
                    <option value="disponivel">Disponível</option>
                    <option value="parcial">Parcial</option>
                  </select>
                </div>
              </div>

              <div style={{marginBottom: '16px', padding: '12px', backgroundColor: '#f9fafb', borderRadius: '6px', fontSize: '12px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981'}}></div>
                  <span><strong>Disponível:</strong> {'<'}50%</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#eab308'}}></div>
                  <span><strong>Parcial:</strong> 50-70%</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f97316'}}></div>
                  <span><strong>Ocupado:</strong> 70-90%</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444'}}></div>
                  <span><strong>Cheio:</strong> {'>'}90%</span>
                </div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px'}}>
                {depotsFiltrados.map(depot => {
                  const statusColors = {disponivel: '#10b981', parcial: '#eab308', ocupado: '#f97316', cheio: '#ef4444'};
                  return (
                    <div key={depot.id} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', border: '1px solid #e5e7eb', borderRadius: '6px'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0}}>
                        <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: statusColors[depot.status] || '#6b7280', flexShrink: 0}}></div>
                        <div style={{minWidth: 0}}>
                          <p style={{fontSize: '14px', fontWeight: '500', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{depot.nome}</p>
                          <p style={{fontSize: '12px', color: '#6b7280', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{depot.armador} • {depot.localizacao}</p>
                        </div>
                      </div>
                      <div style={{textAlign: 'right', marginLeft: '16px', flexShrink: 0}}>
                        <p style={{fontSize: '14px', fontWeight: '500', margin: 0}}>{depot.capacidade}%</p>
                        <p style={{fontSize: '12px', color: '#9ca3af', margin: 0}}>{depot.tempoEspera}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'}}>
              <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
                <h3 style={{fontSize: '18px', fontWeight: '500', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #F39200'}}>Alertas Críticos</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  {alertas.map((a, i) => {
                    const alertStyles = {
                      critico: {bg: '#fef2f2', border: '#ef4444', color: '#ef4444'},
                      atencao: {bg: '#fefce8', border: '#eab308', color: '#eab308'},
                      info: {bg: '#eff6ff', border: '#3b82f6', color: '#3b82f6'}
                    };
                    const style = alertStyles[a.tipo];
                    return (
                      <div key={i} style={{padding: '12px', borderRadius: '6px', backgroundColor: style.bg, borderLeft: `4px solid ${style.border}`}}>
                        <div style={{display: 'flex', alignItems: 'start', gap: '8px'}}>
                          <div style={{color: style.color, marginTop: '2px'}}><AlertCircle /></div>
                          <div style={{flex: 1}}>
                            <p style={{fontSize: '14px', margin: 0}}>{a.mensagem}</p>
                            <p style={{fontSize: '12px', color: '#6b7280', marginTop: '4px', marginBottom: 0}}>{a.tempo}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
                <h3 style={{fontSize: '18px', fontWeight: '500', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #F39200'}}>Economia Gerada</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                  <div style={{borderLeft: '4px solid #F39200', paddingLeft: '16px'}}>
                    <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>Custos Evitados</p>
                    <p style={{fontSize: '28px', fontWeight: '300', marginTop: '4px', marginBottom: 0}}>R$ 127.450</p>
                  </div>
                  <div style={{borderLeft: '4px solid #003B71', paddingLeft: '16px'}}>
                    <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>Tempo Reduzido</p>
                    <p style={{fontSize: '28px', fontWeight: '300', marginTop: '4px', marginBottom: 0}}>-38%</p>
                  </div>
                  <div style={{borderLeft: '4px solid #10b981', paddingLeft: '16px'}}>
                    <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>Devoluções</p>
                    <p style={{fontSize: '28px', fontWeight: '300', marginTop: '4px', marginBottom: 0}}>1.243</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'agendamentos' && (
          <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '16px'}}>
              <h3 style={{fontSize: '18px', fontWeight: '500', margin: 0}}>Agendamentos</h3>
              <button onClick={() => setShowModal(true)} style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'white', padding: '8px 24px', fontSize: '14px', borderRadius: '6px', backgroundColor: '#F39200', border: 'none', cursor: 'pointer'}}>
                <Calendar size={18} />Novo
              </button>
            </div>
            <div style={{marginBottom: '16px'}}>
              <div style={{position: 'relative'}}>
                <div style={{position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af'}}><Search /></div>
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  value={busca} 
                  onChange={(e) => setBusca(e.target.value)} 
                  style={{width: '100%', paddingLeft: '40px', paddingRight: '16px', paddingTop: '8px', paddingBottom: '8px', border: '1px solid #d1d5db', borderRadius: '8px'}} 
                />
              </div>
            </div>
            <div style={{overflowX: 'auto'}}>
              <table style={{width: '100%', minWidth: '600px', borderCollapse: 'collapse'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid #003B71'}}>
                    <th style={{padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '500'}}>Container</th>
                    <th style={{padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '500'}}>Armador</th>
                    <th style={{padding: '12px', textAlign: 'left', fontSize: '14px', fontWeight: '500'}}>Importador</th>
                    <th style={{padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: '500'}}>Data</th>
                    <th style={{padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: '500'}}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {agendamentosFiltrados.map((ag) => (
                    <tr key={ag.id} style={{borderBottom: '1px solid #e5e7eb'}}>
                      <td style={{padding: '12px', fontSize: '14px', fontWeight: '500'}}>{ag.container}</td>
                      <td style={{padding: '12px', fontSize: '14px'}}>{ag.armador}</td>
                      <td style={{padding: '12px', fontSize: '14px'}}>{ag.importador}</td>
                      <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>{ag.data}</td>
                      <td style={{padding: '12px', textAlign: 'center'}}>
                        {ag.status === 'confirmado' && (
                          <span style={{fontSize: '12px', backgroundColor: '#10b981', color: 'white', padding: '4px 12px', borderRadius: '9999px'}}>Confirmado</span>
                        )}
                        {ag.status === 'aguardando' && (
                          <span style={{fontSize: '12px', backgroundColor: '#eab308', color: 'white', padding: '4px 12px', borderRadius: '9999px'}}>Aguardando</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'mapa' && (
          <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <h3 style={{fontSize: '18px', fontWeight: '500', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #F39200'}}>Mapa de Depots</h3>
            <div style={{position: 'relative', background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', padding: '32px', borderRadius: '8px', minHeight: '500px'}}>
              <div style={{position: 'absolute', top: '16px', left: '16px', backgroundColor: 'white', padding: '12px', borderRadius: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '2px solid #003B71'}}>
                <p style={{fontSize: '12px', fontWeight: 'bold', margin: 0}}>ITAJAÍ</p>
              </div>
              <div style={{position: 'absolute', top: '16px', right: '16px', backgroundColor: 'white', padding: '12px', borderRadius: '6px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '2px solid #003B71'}}>
                <p style={{fontSize: '12px', fontWeight: 'bold', margin: 0}}>NAVEGANTES</p>
              </div>
              <div style={{position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#1e3a8a', color: 'white', padding: '8px 16px', borderRadius: '8px'}}>
                <p style={{fontSize: '12px', fontWeight: 'bold', margin: 0}}>⚓ PORTO</p>
              </div>
              
              <div style={{position: 'absolute', top: '100px', left: '40px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.15)', padding: '12px', borderLeft: '4px solid #10b981', width: '180px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px'}}>
                  <MapPin />
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981'}}></div>
                </div>
                <p style={{fontSize: '14px', fontWeight: 'bold', margin: 0}}>Depot Maersk</p>
                <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>Cordeiros</p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #e5e7eb'}}>
                  <span style={{fontSize: '12px'}}>Cap:</span>
                  <span style={{fontSize: '14px', fontWeight: 'bold', color: '#10b981'}}>85%</span>
                </div>
              </div>
              
              <div style={{position: 'absolute', top: '100px', right: '40px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.15)', padding: '12px', borderLeft: '4px solid #10b981', width: '180px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px'}}>
                  <MapPin />
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981'}}></div>
                </div>
                <p style={{fontSize: '14px', fontWeight: 'bold', margin: 0}}>Hamburg Sud</p>
                <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>Centro</p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #e5e7eb'}}>
                  <span style={{fontSize: '12px'}}>Cap:</span>
                  <span style={{fontSize: '14px', fontWeight: 'bold', color: '#10b981'}}>45%</span>
                </div>
              </div>
              
              <div style={{position: 'absolute', bottom: '100px', left: '80px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.15)', padding: '12px', borderLeft: '4px solid #ef4444', width: '180px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px'}}>
                  <MapPin />
                  <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444'}}></div>
                </div>
                <p style={{fontSize: '14px', fontWeight: 'bold', margin: 0}}>Depot MSC</p>
                <p style={{fontSize: '12px', color: '#6b7280', margin: 0}}>Porto</p>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #e5e7eb'}}>
                  <span style={{fontSize: '12px'}}>Cap:</span>
                  <span style={{fontSize: '14px', fontWeight: 'bold', color: '#ef4444'}}>95%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'marketplace' && (
          <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <h3 style={{fontSize: '18px', fontWeight: '500', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #F39200'}}>Marketplace</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px'}}>
              {[
                { nome: 'LogPark Navegantes', dist: '4km', preco: 'R$ 45' },
                { nome: 'Depot Privado Itajaí', dist: '3km', preco: 'R$ 38' },
                { nome: 'Terminal Vale', dist: '2km', preco: 'R$ 52' }
              ].map((d, i) => (
                <div key={i} style={{border: '1px solid #e5e7eb', padding: '16px', borderRadius: '8px', transition: 'box-shadow 0.2s'}}>
                  <h4 style={{fontWeight: '500', marginBottom: '8px', margin: 0}}>{d.nome}</h4>
                  <p style={{fontSize: '12px', color: '#6b7280', marginBottom: '12px', marginTop: 0}}>{d.dist} do porto</p>
                  <p style={{fontSize: '14px', marginBottom: '12px', marginTop: 0}}>Preço: <span style={{fontWeight: 'bold', color: '#10b981'}}>{d.preco}/dia</span></p>
                  <button style={{width: '100%', color: 'white', padding: '8px', fontSize: '14px', borderRadius: '6px', backgroundColor: '#003B71', border: 'none', cursor: 'pointer'}}>Solicitar</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'relatorios' && (
          <div style={{backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <h3 style={{fontSize: '18px', fontWeight: '500', marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #F39200'}}>Relatórios</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '32px'}}>
              <div style={{borderLeft: '4px solid #F39200', paddingLeft: '16px'}}>
                <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '4px', marginTop: 0}}>Economia Total</p>
                <p style={{fontSize: '28px', fontWeight: '300', margin: 0}}>R$ 680K</p>
                <p style={{fontSize: '12px', color: '#10b981', marginTop: '4px', marginBottom: 0}}>↓ 42%</p>
              </div>
              <div style={{borderLeft: '4px solid #003B71', paddingLeft: '16px'}}>
                <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '4px', marginTop: 0}}>Devoluções</p>
                <p style={{fontSize: '28px', fontWeight: '300', margin: 0}}>7.891</p>
                <p style={{fontSize: '12px', color: '#6b7280', marginTop: '4px', marginBottom: 0}}>6 meses</p>
              </div>
              <div style={{borderLeft: '4px solid #10b981', paddingLeft: '16px'}}>
                <p style={{fontSize: '14px', color: '#6b7280', marginBottom: '4px', marginTop: 0}}>Tempo Médio</p>
                <p style={{fontSize: '28px', fontWeight: '300', margin: 0}}>42min</p>
                <p style={{fontSize: '12px', color: '#10b981', marginTop: '4px', marginBottom: 0}}>↓ 38%</p>
              </div>
            </div>
            <div>
              <p style={{fontSize: '14px', fontWeight: '500', marginBottom: '16px', marginTop: 0}}>Desempenho por Armador</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                {[
                  { nome: 'Maersk', tempo: 35 },
                  { nome: 'MSC', tempo: 58 },
                  { nome: 'Hamburg Sud', tempo: 42 },
                  { nome: 'CMA CGM', tempo: 48 }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px'}}>
                      <span>{item.nome}</span>
                      <span style={{color: '#6b7280'}}>{item.tempo} min</span>
                    </div>
                    <div style={{width: '100%', backgroundColor: '#f3f4f6', height: '8px', borderRadius: '4px'}}>
                      <div style={{height: '8px', borderRadius: '4px', backgroundColor: '#003B71', width: `${(item.tempo / 70) * 100}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div style={{position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '16px'}}>
          <div style={{backgroundColor: 'white', borderRadius: '8px', maxWidth: '672px', width: '100%', maxHeight: '90vh', overflowY: 'auto'}}>
            <div style={{padding: '24px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', backgroundColor: '#003B71', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', position: 'sticky', top: 0}}>
              <h3 style={{fontSize: '18px', fontWeight: '500', color: 'white', margin: 0}}>Novo Agendamento</h3>
              <button onClick={() => setShowModal(false)} style={{color: 'white', backgroundColor: 'transparent', padding: '4px', borderRadius: '6px', border: 'none', cursor: 'pointer'}}><X /></button>
            </div>
            <div style={{padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div>
                <label style={{display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px'}}>Container</label>
                <input type="text" placeholder="Ex: MAEU1234567" style={{width: '100%', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px'}} />
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px'}}>
                <div>
                  <label style={{display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px'}}>Armador</label>
                  <select style={{width: '100%', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px'}}>
                    <option>Selecione</option>
                    <option>Maersk</option>
                    <option>MSC</option>
                  </select>
                </div>
                <div>
                  <label style={{display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px'}}>Data</label>
                  <input type="date" style={{width: '100%', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px'}} />
                </div>
              </div>
              <div>
                <label style={{display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px'}}>Importador</label>
                <input type="text" placeholder="Nome da empresa" style={{width: '100%', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px'}} />
              </div>
              <div>
                <label style={{display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px'}}>Depot Sugerido</label>
                <div style={{padding: '16px', border: '2px solid #F39200', borderRadius: '8px', backgroundColor: '#FFF4E6'}}>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <div>
                      <p style={{fontWeight: '500', margin: 0}}>Depot Hapag-Lloyd</p>
                      <p style={{fontSize: '14px', color: '#6b7280', margin: 0}}>São João - Itajaí</p>
                    </div>
                    <div style={{width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981'}}></div>
                  </div>
                  <p style={{fontSize: '12px', marginTop: '8px', marginBottom: 0, color: '#6b7280'}}>✓ Melhor opção</p>
                </div>
              </div>
            </div>
            <div style={{padding: '24px', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '12px', justifyContent: 'flex-end'}}>
              <button onClick={() => setShowModal(false)} style={{padding: '8px 24px', border: '1px solid #d1d5db', borderRadius: '8px', backgroundColor: 'white', cursor: 'pointer'}}>Cancelar</button>
              <button onClick={() => setShowModal(false)} style={{padding: '8px 24px', color: 'white', borderRadius: '8px', backgroundColor: '#F39200', border: 'none', cursor: 'pointer'}}>Confirmar</button>
            </div>
          </div>
        </div>
      )}

      <div style={{backgroundColor: 'white', borderTop: '1px solid #e5e7eb', marginTop: '48px'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '24px', textAlign: 'center', fontSize: '14px', color: '#6b7280'}}>
          <p style={{margin: 0}}>SISDEV - Protótipo Kamtech - Rotas para Inovação - Outubro 2025</p>
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
