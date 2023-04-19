new Vue({
    el: '#app',
    data: {
      funcionariosInput: '',
      usuariosInput: '',
      funcionariosDoSistema: []
    },
    methods: {
      verificarFuncionarios: function() {
        
        const funcionarios = this.funcionariosInput.split('\n').map(linha => linha.trim().toUpperCase()).filter(linha => linha !== '');
        const usuariosSistema = this.usuariosInput.split('\n').map(linha => linha.trim().toUpperCase()).filter(linha => linha !== '');

        
        const funcionariosDoSistema = [];
        for (let i = 0; i < funcionarios.length; i++) {
          const funcionario = funcionarios[i];
          if (usuariosSistema.includes(funcionario)) {
            console.log(`${funcionario} é um funcionário do sistema`);
            funcionariosDoSistema.push(funcionario);
          }
        }

        
        this.funcionariosDoSistema = funcionariosDoSistema;
      },

      downloadFuncionarios: function() {
        
        const fileText = this.funcionariosDoSistema.join('\n');

        const blob = new Blob([fileText], { type: 'text/plain' });

        
        const url = URL.createObjectURL(blob);

       
        const link = document.createElement('a');
        link.href = url;
        link.download = 'funcionarios-do-sistema.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    }
  });