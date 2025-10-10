import React, { useState } from 'react';
import { MapPin, TrendingUp, Package, AlertCircle, Calendar, BarChart3, Map, X, Search, RefreshCw, Bell } from 'lucide-react';

const SISDEV = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNovoAgendamento, setShowNovoAgendamento] = useState(false);
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
    { id: 1, container: 'MAEU1234567', armador: 'Maersk', importador: 'Portobello S.A.', data: '2025-10-11', depot: 'Depot Maersk Itajaí', status: 'confirmado' },
    { id: 2, container: 'MSCU9876543', armador: 'MSC', importador: 'Haco Etiquetas', data: '2025-10-11', depot: 'Depot MSC Itajaí Porto', status: 'aguardando' },
    { id: 3, container: 'HLCU5551234', armador: 'Hapag-Lloyd', importador: 'WEG Equipamentos', data: '2025-10-12', depot: 'Depot Hapag-Lloyd Itajaí', status: 'confirmado' },
    { id: 4, container: 'CMAU7778899', armador: 'CMA CGM', importador: 'Bretzke Logística', data: '2025-10-12', depot: 'Depot CMA CGM Navegantes', status: 'atrasado' }
  ];

  const alertas = [
    { tipo: 'critico', mensagem: 'Container MSCU9876543 - Free time expira em 6 horas', tempo: '1h atrás' },
    { tipo: 'atencao', mensagem: 'Depot MSC Itajaí Porto com capacidade crítica (95%)', tempo: '2h atrás' },
    { tipo: 'info', mensagem: 'Novo depot disponível: LogPark Navegantes', tempo: '5h atrás' },
    { tipo: 'critico', mensagem: 'Container HLCU2223334 acumulando demurrage - R$ 450/dia', tempo: '30min atrás' }
  ];

  const getStatusColor = (status) => {
    const colors = { disponivel: 'bg-green-500', parcial: 'bg-yellow-500', ocupado: 'bg-orange-500', cheio: 'bg-red-500' };
    return colors[status] || 'bg-gray-500';
  };

  const getAlertStyle = (tipo) => {
    const styles = { critico: 'bg-red-50 border-l-4 border-red-500', atencao: 'bg-yellow-50 border-l-4 border-yellow-500', info: 'bg-blue-50 border-l-4 border-blue-500' };
    return styles[tipo];
  };

  const getAlertIcon = (tipo) => {
    const colors = { critico: 'text-red-500', atencao: 'text-yellow-500', info: 'text-blue-500' };
    return colors[tipo];
  };

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
    <div className="min-h-screen bg-gray-50">
      <div className="text-white p-6" style={{backgroundColor: '#003B71'}}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-light">SISDEV - Barra do Rio</h1>
            <p className="text-sm mt-1" style={{color: '#F39200'}}>Sistema de Gestão de Devoluções de Contêineres Vazios</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-blue-800 rounded-lg transition-colors">
              <Bell size={24} />
              {alertasCriticos > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {alertasCriticos}
                </span>
              )}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              <RefreshCw size={18} />
              <span className="text-sm">Atualizar</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex gap-0">
            <button onClick={() => setActiveTab('dashboard')} className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${activeTab === 'dashboard' ? '' : 'text-gray-600 border-transparent'}`} style={activeTab === 'dashboard' ? {color: '#F39200', borderColor: '#F39200'} : {}}>
              <BarChart3 size={20} />Dashboard
            </button>
            <button onClick={() => setActiveTab('agendamentos')} className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${activeTab === 'agendamentos' ? '' : 'text-gray-600 border-transparent'}`} style={activeTab === 'agendamentos' ? {color: '#F39200', borderColor: '#F39200'} : {}}>
              <Calendar size={20} />Agendamentos
            </button>
            <button onClick={() => setActiveTab('mapa')} className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${activeTab === 'mapa' ? '' : 'text-gray-600 border-transparent'}`} style={activeTab === 'mapa' ? {color: '#F39200', borderColor: '#F39200'} : {}}>
              <Map size={20} />Mapa
            </button>
            <button onClick={() => setActiveTab('marketplace')} className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${activeTab === 'marketplace' ? '' : 'text-gray-600 border-transparent'}`} style={activeTab === 'marketplace' ? {color: '#F39200', borderColor: '#F39200'} : {}}>
              <Package size={20} />Marketplace
            </button>
            <button onClick={() => setActiveTab('relatorios')} className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors border-b-2 ${activeTab === 'relatorios' ? '' : 'text-gray-600 border-transparent'}`} style={activeTab === 'relatorios' ? {color: '#F39200', borderColor: '#F39200'} : {}}>
              <TrendingUp size={20} />Relatórios
            </button>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="bg-white p-6">
              <div className="grid grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Total Depots</p>
                  <p className="text-4xl font-light text-gray-800">18</p>
                </div>
                <div className="text-center border-l border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Disponíveis</p>
                  <p className="text-4xl font-light text-green-600">8</p>
                </div>
                <div className="text-center border-l border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Devoluções Hoje</p>
                  <p className="text-4xl font-light" style={{color: '#003B71'}}>47</p>
                </div>
                <div className="text-center border-l border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">Tempo Médio</p>
                  <p className="text-4xl font-light" style={{color: '#F39200'}}>42min</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-800">Disponibilidade dos Depots em Tempo Real</h3>
                <div className="flex gap-3">
                  <select value={filtroArmador} onChange={(e) => setFiltroArmador(e.target.value)} className="text-sm border border-gray-300 rounded px-3 py-1">
                    <option value="todos">Todos Armadores</option>
                    <option value="Maersk">Maersk</option>
                    <option value="MSC">MSC</option>
                    <option value="Hamburg Sud">Hamburg Sud</option>
                    <option value="CMA CGM">CMA CGM</option>
                    <option value="Hapag-Lloyd">Hapag-Lloyd</option>
                    <option value="Cosco">Cosco</option>
                  </select>
                  <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)} className="text-sm border border-gray-300 rounded px-3 py-1">
                    <option value="todos">Todos Status</option>
                    <option value="disponivel">Disponível</option>
                    <option value="parcial">Parcial</option>
                    <option value="ocupado">Ocupado</option>
                    <option value="cheio">Cheio</option>
                  </select>
                </div>
              </div>

              <div className="mb-4 flex gap-6 text-xs text-gray-600 p-3 bg-gray-50 rounded">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span><strong>Disponível:</strong> Capacidade abaixo de 50%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span><strong>Parcial:</strong> Capacidade entre 50-70%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span><strong>Ocupado:</strong> Capacidade entre 70-90%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span><strong>Cheio:</strong> Capacidade acima de 90%</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {depotsFiltrados.map(depot => (
                  <div key={depot.id} className="flex items-center justify-between p-4 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(depot.status)}`}></div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{depot.nome}</p>
                        <p className="text-xs text-gray-500">{depot.armador} • {depot.localizacao}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-700">{depot.capacidade}%</p>
                      <p className="text-xs text-gray-400">Espera: {depot.tempoEspera}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6">
                <h3 className="text-lg font-medium mb-4 text-gray-800 pb-2 border-b-2" style={{borderColor: '#F39200'}}>Alertas Críticos</h3>
                <div className="space-y-3">
                  {alertas.map((alerta, idx) => (
                    <div key={idx} className={`p-3 ${getAlertStyle(alerta.tipo)}`}>
                      <div className="flex items-start gap-2">
                        <AlertCircle size={16} className={`mt-0.5 ${getAlertIcon(alerta.tipo)}`} />
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">{alerta.mensagem}</p>
                          <p className="text-xs text-gray-500 mt-1">{alerta.tempo}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-lg font-medium mb-4 text-gray-800 pb-2 border-b-2" style={{borderColor: '#F39200'}}>Economia Gerada</h3>
                <div className="space-y-4">
                  <div className="border-l-4 pl-4" style={{borderColor: '#F39200'}}>
                    <p className="text-sm text-gray-600">Custos Evitados</p>
                    <p className="text-3xl font-light text-gray-800 mt-1">R$ 127.450</p>
                  </div>
                  <div className="border-l-4 pl-4" style={{borderColor: '#003B71'}}>
                    <p className="text-sm text-gray-600">Tempo Reduzido</p>
                    <p className="text-3xl font-light text-gray-800 mt-1">-38%</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm text-gray-600">Devoluções</p>
                    <p className="text-3xl font-light text-gray-800 mt-1">1.243</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'agendamentos' && (
          <div className="bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-800">Agendamentos de Devolução</h3>
              <button onClick={() => setShowNovoAgendamento(true)} className="flex items-center gap-2 text-white px-6 py-3 text-sm font-medium rounded hover:opacity-90 transition-opacity" style={{backgroundColor: '#F39200'}}>
                <Calendar size={18} />
                Novo Agendamento
              </button>
            </div>

            <div className="mb-6 p-4 border-l-4" style={{backgroundColor: '#FFF4E6', borderColor: '#F39200'}}>
              <p className="text-sm text-gray-800 font-medium">💡 Agende sua devolução e escolha o melhor depot!</p>
              <p className="text-xs text-gray-600 mt-1">O sistema sugere automaticamente o depot com menor tempo de espera e melhor localização.</p>
            </div>

            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input type="text" placeholder="Buscar por container ou importador..." value={busca} onChange={(e) => setBusca(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2" style={{borderColor: '#003B71'}}>
                    <th className="p-3 text-left text-sm font-medium text-gray-700">Container</th>
                    <th className="p-3 text-left text-sm font-medium text-gray-700">Armador</th>
                    <th className="p-3 text-left text-sm font-medium text-gray-700">Importador</th>
                    <th className="p-3 text-center text-sm font-medium text-gray-700">Data</th>
                    <th className="p-3 text-center text-sm font-medium text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {agendamentosFiltrados.map((ag) => (
                    <tr key={ag.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 text-sm text-gray-800 font-medium">{ag.container}</td>
                      <td className="p-3 text-sm text-gray-600">{ag.armador}</td>
                      <td className="p-3 text-sm text-gray-600">{ag.importador}</td>
                      <td className="p-3 text-sm text-gray-600 text-center">{ag.data}</td>
                      <td className="p-3 text-center">
                        {ag.status === 'confirmado' && <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">Confirmado</span>}
                        {ag.status === 'aguardando' && <span className="text-xs bg-yellow-500 text-white px-3 py-1 rounded-full">Aguardando</span>}
                        {ag.status === 'atrasado' && <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">Atrasado</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'mapa' && (
          <div className="bg-white p-6">
            <h3 className="text-lg font-medium mb-4 text-gray-800 pb-2 border-b-2" style={{borderColor: '#F39200'}}>Mapa de Depots</h3>
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg" style={{minHeight: '600px'}}>
              <div className="absolute top-4 left-4 bg-white p-3 rounded shadow-sm border-2" style={{borderColor: '#003B71'}}>
                <p className="text-xs font-bold text-gray-700">ITAJAÍ</p>
              </div>
              <div className="absolute top-4 right-4 bg-white p-3 rounded shadow-sm border-2" style={{borderColor: '#003B71'}}>
                <p className="text-xs font-bold text-gray-700">NAVEGANTES</p>
              </div>
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white px-4 py-2 rounded-lg">
                <p className="text-xs font-bold">⚓ PORTO DE ITAJAÍ</p>
              </div>

              <div className="absolute top-32 left-16 bg-white rounded-lg shadow-md p-3 border-l-4 border-green-500 w-48 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <MapPin size={16} className="text-green-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm font-bold text-gray-800">Depot Maersk</p>
                <p className="text-xs text-gray-500">Cordeiros - Itajaí</p>
                <div className="flex justify-between mt-2 pt-2 border-t">
                  <span className="text-xs text-gray-600">Cap:</span>
                  <span className="text-sm font-bold text-green-600">85%</span>
                </div>
              </div>

              <div className="absolute bottom-32 left-32 bg-white rounded-lg shadow-md p-3 border-l-4 border-red-500 w-48 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <MapPin size={16} className="text-red-500" />
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <p className="text-sm font-bold text-gray-800">Depot MSC</p>
                <p className="text-xs text-gray-500">Porto - Itajaí</p>
                <div className="flex justify-between mt-2 pt-2 border-t">
                  <span className="text-xs text-gray-600">Cap:</span>
                  <span className="text-sm font-bold text-red-600">95%</span>
                </div>
              </div>

              <div className="absolute top-32 right-16 bg-white rounded-lg shadow-md p-3 border-l-4 border-green-500 w-48 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <MapPin size={16} className="text-green-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm font-bold text-gray-800">Depot Hamburg Sud</p>
                <p className="text-xs text-gray-500">Centro - Navegantes</p>
                <div className="flex justify-between mt-2 pt-2 border-t">
                  <span className="text-xs text-gray-600">Cap:</span>
                  <span className="text-sm font-bold text-green-600">45%</span>
                </div>
              </div>

              <div className="absolute bottom-32 right-32 bg-white rounded-lg shadow-md p-3 border-l-4 border-red-500 w-48 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <MapPin size={16} className="text-red-500" />
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <p className="text-sm font-bold text-gray-800">Depot Cosco</p>
                <p className="text-xs text-gray-500">Gravatá - Navegantes</p>
                <div className="flex justify-between mt-2 pt-2 border-t">
                  <span className="text-xs text-gray-600">Cap:</span>
                  <span className="text-sm font-bold text-red-600">100%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'marketplace' && (
          <div className="bg-white p-6">
            <h3 className="text-lg font-medium mb-4 text-gray-800 pb-2 border-b-2" style={{borderColor: '#F39200'}}>Marketplace de Capacidade</h3>
            <p className="text-sm text-gray-600 mb-6">Depots privados com espaço disponível</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border p-4 rounded hover:shadow-lg transition-shadow">
                <h4 className="font-medium text-gray-800 mb-2">LogPark Navegantes</h4>
                <p className="text-xs text-gray-500 mb-3">4km do porto</p>
                <p className="text-sm mb-2">Preço: <span className="font-bold text-green-600">R$ 45/dia</span></p>
                <button className="w-full text-white py-2 text-sm rounded hover:opacity-90 transition-opacity" style={{backgroundColor: '#003B71'}}>Solicitar</button>
              </div>
              <div className="border p-4 rounded hover:shadow-lg transition-shadow">
                <h4 className="font-medium text-gray-800 mb-2">Depot Privado Itajaí</h4>
                <p className="text-xs text-gray-500 mb-3">3km do porto</p>
                <p className="text-sm mb-2">Preço: <span className="font-bold text-green-600">R$ 38/dia</span></p>
                <button className="w-full text-white py-2 text-sm rounded hover:opacity-90 transition-opacity" style={{backgroundColor: '#003B71'}}>Solicitar</button>
              </div>
              <div className="border p-4 rounded hover:shadow-lg transition-shadow">
                <h4 className="font-medium text-gray-800 mb-2">Terminal Vale</h4>
                <p className="text-xs text-gray-500 mb-3">2km do porto</p>
                <p className="text-sm mb-2">Preço: <span className="font-bold text-green-600">R$ 52/dia</span></p>
                <button className="w-full text-white py-2 text-sm rounded hover:opacity-90 transition-opacity" style={{backgroundColor: '#003B71'}}>Solicitar</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'relatorios' && (
          <div className="bg-white p-6">
            <h3 className="text-lg font-medium mb-4 text-gray-800 pb-2 border-b-2" style={{borderColor: '#F39200'}}>Relatórios e Analytics</h3>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="border-l-4 pl-4" style={{borderColor: '#F39200'}}>
                <p className="text-sm text-gray-600 mb-1">Economia Total</p>
                <p className="text-3xl font-light text-gray-800">R$ 680K</p>
                <p className="text-xs text-green-600 mt-1">↓ 42% em custos</p>
              </div>
              <div className="border-l-4 pl-4" style={{borderColor: '#003B71'}}>
                <p className="text-sm text-gray-600 mb-1">Devoluções</p>
                <p className="text-3xl font-light text-gray-800">7.891</p>
                <p className="text-xs text-gray-500 mt-1">Últimos 6 meses</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-sm text-gray-600 mb-1">Tempo Médio</p>
                <p className="text-3xl font-light text-gray-800">42min</p>
                <p className="text-xs text-green-600 mt-1">↓ 38% redução</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-4">Desempenho por Armador</p>
              <div className="space-y-4">
                {[
                  { nome: 'Maersk', tempo: 35 },
                  { nome: 'MSC', tempo: 58 },
                  { nome: 'Hamburg Sud', tempo: 42 },
                  { nome: 'CMA CGM', tempo: 48 },
                  { nome: 'Hapag-Lloyd', tempo: 31 },
                  { nome: 'Cosco', tempo: 65 }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700">{item.nome}</span>
                      <span className="text-gray-500">{item.tempo} min</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded">
                      <div className="h-2 rounded" style={{backgroundColor: '#003B71', width: `${(item.tempo / 70) * 100}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {showNovoAgendamento && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between" style={{backgroundColor: '#003B71'}}>
              <h3 className="text-xl font-medium text-white">Novo Agendamento de Devolução</h3>
              <button onClick={() => setShowNovoAgendamento(false)} className="text-white hover:bg-blue-800 p-1 rounded">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Número do Container</label>
                <input type="text" placeholder="Ex: MAEU1234567" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Armador</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Selecione o armador</option>
                    <option>Maersk</option>
                    <option>MSC</option>
                    <option>Hamburg Sud</option>
                    <option>CMA CGM</option>
                    <option>Hapag-Lloyd</option>
                    <option>Cosco</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data de Devolução</label>
                  <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Importador</label>
                <input type="text" placeholder="Nome da empresa importadora" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Depot Sugerido pelo Sistema</label>
                <div className="p-4 border-2 rounded-lg" style={{borderColor: '#F39200', backgroundColor: '#FFF4E6'}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">Depot Hapag-Lloyd Itajaí</p>
                      <p className="text-sm text-gray-600">São João - Itajaí</p>
                      <p className="text-xs text-gray-500 mt-1">Capacidade: 22% • Tempo de espera: 10 min</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-xs mt-2 text-gray-600">✓ Melhor opção baseado em disponibilidade e localização</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ou escolha outro depot</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Depot Hapag-Lloyd Itajaí (Recomendado)</option>
                  <option>Depot Maersk Itajaí</option>
                  <option>Depot Hamburg Sud Navegantes</option>
                  <option>Depot CMA CGM Navegantes</option>
                  <option>Depot MSC Itajaí Porto</option>
                  <option>Depot Cosco Navegantes Sul</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Observações (opcional)</label>
                <textarea rows={3} placeholder="Adicione informações adicionais sobre o agendamento" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
              <button onClick={() => setShowNovoAgendamento(false)} className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Cancelar
              </button>
              <button onClick={() => setShowNovoAgendamento(false)} className="px-6 py-2 text-white rounded-lg hover:opacity-90" style={{backgroundColor: '#F39200'}}>
                Confirmar Agendamento
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto p-6 text-center text-sm text-gray-600">
          <p>SISDEV - Protótipo Kamtech - Rotas para Inovação - Outubro 2025</p>
        </div>
      </div>
    </div>
  );
};

export default SISDEV;
