	  $("#extruderLeft").attr("temp", "{ title: 'Functions', url: '' }");
	  $("#extruderLeft").metadata().url = '';
	  $("#tw").metadata().panel = '';
	  $("#extruderLeft1").metadata().title = 'Object Browser';
	  $("#extruderLeft1").metadata().url = '';
	  
	  $("#extruderLeft").buildMbExtruder({
      position : "left",
      width : 230,
      extruderOpacity : .8,
      hidePanelsOnClose : true,
      accordionPanels : true,
      });
      $("#extruderLeft1").buildMbExtruder({
      position : "left",
      width : 230,
      extruderOpacity : .8,
      });
      var s = $("#browser").treeview({
      collapsed : true
      });
      //======================= 트리 생성 ===============================
      //========= 소켓 연결
      var socket = io.connect();
      //========= 트리전체를 감싸는 #browser 선언
      var $browser = $("#browser");
      //========= db 트리 생성
      socket
      .on(
      'db',
      function(data) {
      for (var i = 0; i < data.db.length; i++) {
      $(
      "<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='db'>"
      + data.db[i] + "</span></li>")
      .appendTo($browser);
      }
      socket.removeListener('db');
      });
      //========= db 클릭, 스키마 생성
      $browser.on("click", ".db", function() {
      var $this = $(this);//db
      var dbname = $this.text();
      if ($this.parent().hasClass("collapsable")) {
      $this.next().remove();
      $this.prev().removeClass().addClass(
      "hitarea expandable-hitarea lastExpandable-hitarea");
      $this.parent().removeClass().addClass(
      "expandable lastExpandable");
      } else {
      $this.prev().removeClass().addClass(
      "hitarea collapsable-hitarea lastCollapsable-hitarea");
      $this.parent().removeClass().addClass(
      "collapsable lastCollapsable");
      //스키마 출력 함수 호출
      schname_emit(dbname, $this);
      }
      });
      //스키마 출력 함수(인자: dbname은 db이름, $this는 객체)
      function schname_emit(dbname, $this) {
      console.log($this.text());
      //db이름 전송
      socket.emit('set_dbname', dbname);
      //스키마 수신
      socket.once('scname', function(data) {//이벤트 리스너 해제를 확실히 하기 위해서, once 메서드(한번만 리스너 실행)를 씀.(다른 리스너들은 on을 써도 작동됨)
      if (data.schema != 0) {//접속한 db와 dbname이 일치하지 않을 때 0으로 리턴되면 실행하지 않음.
      var clickedDb = $this;
      //스키마 배열 생성 함수 호출
      sch_name(data, clickedDb);
      console.log("clicked: " + clickedDb.text());
      //스키마 수신 이벤트 리스너 해제
      socket.removeListener('scname');
      }
      });
      //스키마 배열 생성 함수(data = 스키마 데이터, clickedDb = 클릭한 db 객체($this))
      function sch_name(data, clickedDb) {
      $("<ul style='display: block;' class='sch'>").insertAfter(
      clickedDb);
      console.log(clickedDb.text());
      for (var i = 0; i < data.schema.length; i++) {
      $(
      "<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='schema'>"
      + data.schema[i] + "</span></li>")
      .appendTo(clickedDb.next());
      }
      }
      }
      //========= 스키마 클릭, 테이블/뷰/함수(이름만) 생성
      $browser
      .on(
      "click",
      ".schema",
      function() {
      var $this = $(this);//schema
      if ($this.parent().hasClass("collapsable")) {
      $this.next().remove();
      $this
      .prev()
      .removeClass()
//      .addClass(
//      "hitarea expandable-hitarea lastExpandable-hitarea");
//      $this.parent().removeClass().addClass(
//      "expandable lastExpandable");
//      } else {
//      $this
//      .prev()
//      .removeClass()
//      .addClass(
//      "hitarea collapsable-hitarea lastCollapsable-hitarea");
//      $this.parent().removeClass().addClass(
//      "collapsable lastCollapsable");
//      $("<ul>")
//      .insertAfter($this)
//      .append(
//      "<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='schemaTable'>"
//      + "table"
//      + "</span></li>")
//      .append(
//      "<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='schemaView'>"
//      + "view"
//      + "</span></li>")
//      .append(
//      "<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='schemaFunc'>"
//      + "function"
//      + "</span></li>");
//      }
//      });
//      //========= 스키마테이블 클릭, 테이블 생성
//      $browser.on("click", ".schemaTable", function() {
//      var $this = $(this);
//      var $parent = $this.parent();
//      var scname = $parent.parent().prev().text();
//      if ($parent.children().hasClass("tab")) {
//      $parent.children(".tab").remove();
//      $this.prev().removeClass().addClass(
//      "hitarea expandable-hitarea lastExpandable-hitarea");
//      $parent.removeClass().addClass("expandable lastExpandable");
//      } else {
//      $this.prev().removeClass().addClass(
//      "hitarea collapsable-hitarea lastCollapsable-hitarea");
//      $parent.removeClass().addClass("collapsable lastCollapsable");
//      //테이블 출력 함수 호출
//      tabname_emit(scname, $parent);
//      }
//      });
//      //테이블 출력 함수 (scname = 스키마 이름)
//      function tabname_emit(scname, $parent) {
//      //스키마 이름 전송
//      socket.emit('set_scname_table', scname);
//      //테이블 수신
//      socket.on('tabname', function(data) {
//      if (data.table.length !== 0) {
//      $("<ul style='display: block;' class='tab'>").appendTo(
//      $parent);
//      //테이블 배열 생성 함수 호출
//      tab_name(data);
//      }
//      });
//      //테이블 배열 생성 함수 (data = 테이블 데이터)
//      function tab_name(data) {
//      console.log(data);
//      for (var i = 0; i < data.table.length; i++) {
//      console.log(data.table[i]);
//      $(
//      "<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='table'>"
//      + data.table[i] + "</span></li>").appendTo(
//      $parent.children(".tab"));
//      }
//      //테이블 수신 이벤트 리스너 해제
//      socket.removeListener('tabname');
//      }
//      }
//      //========= 스키마뷰 클릭, 뷰 생성
//      $browser.on("click", ".schemaView", function() {
//      var $this = $(this);
//      var $parent = $this.parent();
//      var scname = $parent.parent().prev().text();
//      if ($parent.children().hasClass("vw")) {
//      $parent.children(".vw").remove();
//      $this.prev().removeClass().addClass(
//      "hitarea expandable-hitarea lastExpandable-hitarea");
//      $parent.removeClass().addClass("expandable lastExpandable");
//      } else {
//      $this.prev().removeClass().addClass(
//      "hitarea collapsable-hitarea lastCollapsable-hitarea");
//      $parent.removeClass().addClass("collapsable lastCollapsable");
//      //뷰 출력 함수 호출
//      viewname_emit(scname, $parent);
//      }
//      });
//      //뷰 출력 함수 (scname = 스키마 이름)
//      function viewname_emit(scname, $parent) {
//      //스키마 이름 전송
//      socket.emit('set_scname_view', scname);
//      //뷰 수신
//      socket.on('viewname', function(data) {
//      if (data.view.length !== 0) {
//      $("<ul style='display: block;' class='vw'>").appendTo(
//      $parent);
//      //뷰 배열 생성 함수 호출
//      view_name(data);
//      }
//      });
//      //뷰 배열 생성 함수 (data = 뷰 데이터)
//      function view_name(data) {
//      console.log(data);
//      for (var i = 0; i < data.view.length; i++) {
//      console.log(data.view[i]);
//      $(
//      "<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='view'>"
//      + data.view[i] + "</span></li>").appendTo(
//      $parent.children(".vw"));
//      }
//      //뷰 수신 이벤트 리스너 해제
//      socket.removeListener('viewname');
//      }
//      }
//      //========= 스키마함수 클릭, 함수 생성
//      $browser.on("click", ".schemaFunc", function() {
//      var $this = $(this);
//      var $parent = $this.parent();
//      var scname = $parent.parent().prev().text();
//      if ($parent.children().hasClass("func")) {
//      $parent.children(".func").remove();
//      $this.prev().removeClass().addClass(
//      "hitarea expandable-hitarea lastExpandable-hitarea");
//      $parent.removeClass().addClass("expandable lastExpandable");
//      } else {
//      $this.prev().removeClass().addClass(
//      "hitarea collapsable-hitarea lastCollapsable-hitarea");
//      $parent.removeClass().addClass("collapsable lastCollapsable");
//      //함수 출력 함수 호출
//      funcname_emit(scname, $parent);
//      }
//      });
//      //함수 출력 함수 (scname = 스키마 이름)
//      function funcname_emit(scname, $parent) {
//      //스키마 이름 전송
//      socket.emit('set_scname_func', scname);
//      //함수 수신
//      socket.on('funcname', function(data) {
//      if (data.func.length !== 0) {
//      $("<ul style='display: block;' class='func'>").appendTo(
//      $parent);
//      //함수 배열 생성 함수 호출
//      func_name(data);
//      }
//      });
//      //함수 배열 생성 함수 (data = 함수 데이터)
//      function func_name(data) {
//      console.log(data);
//      for (var i = 0; i < data.func.length; i++) {
//      console.log(data.func[i]);
//      $(
//      "<li class='last'><span class='func'>"
//      + data.func[i] + "</span></li>").appendTo(
//      $parent.children(".func"));
//      }
//      //함수 수신 이벤트 리스너 해제
//      socket.removeListener('funcname');
//      }
//      }
//      //========= 테이블 클릭, column/index/constraints(이름만) 생성
//      $browser.on("click",".table",function() {
//      var $this = $(this);
//      if ($this.parent().hasClass("collapsable")) {
//      $this.next().remove();
//      $this.prev().removeClass().addClass("hitarea expandable-hitarea lastExpandable-hitarea");
//      $this.parent().removeClass().addClass("expandable lastExpandable");
//      } else {
//      $this.prev().removeClass().addClass("hitarea collapsable-hitarea lastCollapsable-hitarea");
//      $this.parent().removeClass().addClass("collapsable lastCollapsable");
//      $("<ul>").insertAfter($this).append("<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='tableColumn'>"
//      +"column" + "</span></li>").append("<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='tableIndex'>"
//      + "index" + "</span></li>").append("<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='tableConstraint'>"
//      + "constraint" + "</span></li>");
//      }
//      });
//      //========= 뷰 클릭, column(이름만) 생성
//      $browser.on("click",".view", function(){
//      var $this = $(this);
//      if ($this.parent().hasClass("collapsable")) {
//      $this.next().remove();
//      $this.prev().removeClass().addClass("hitarea expandable-hitarea lastExpandable-hitarea");
//      $this.parent().removeClass().addClass("expandable lastExpandable");
//      } else {
//      $this.prev().removeClass().addClass("hitarea collapsable-hitarea lastCollapsable-hitarea");
//      $this.parent().removeClass().addClass("collapsable lastCollapsable");
//      $("<ul>").insertAfter($this).append("<li class='expandable lastExpandable'><div class='hitarea expandable-hitarea lastExpandable-hitarea'></div><span class='viewColumn'>"
//      +"column" + "</span></li>");
//      }
//      });
//      //========= 테이블컬럼 클릭, 컬럼 생성
//      $browser.on("click", ".tableColumn, .viewColumn", function() {
//      var $this = $(this);
//      var $parent = $this.parent();
//      var tabname = $parent.parent().prev().text();
//      var scname = $parent.parent().parent().parent().parent().parent()
//      .prev().text();
//      if ($parent.children().hasClass("col")) {
//      $parent.children(".col").remove();
//      $this.prev().removeClass().addClass(
//      "hitarea expandable-hitarea lastExpandable-hitarea");
//      $parent.removeClass().addClass("expandable lastExpandable");
//      } else {
//      $this.prev().removeClass().addClass(
//      "hitarea collapsable-hitarea lastCollapsable-hitarea");
//      $parent.removeClass().addClass("collapsable lastCollapsable");
//      // 컬럼 출력 함수 호출
//      colname_emit(tabname, scname, $parent);
//      }
//      });
//      //컬럼 출력 함수
//      function colname_emit(tabname, scname, $parent) {
//      //테이블 이름 전송
//      socket.emit('set_tabname_col', {
//      tabname : tabname,
//      scname : scname
//      });
//      //컬럼 수신
//      socket.on('colname', function(data) {
//      if (data.column.length !== 0) {
//      $("<ul style='display: block;' class='col'>").appendTo(
//      $parent);
//      //컬럼 배열 생성 함수 호출
//      col_name(data);
//      }
//      });
//      //컬럼 배열 생성 함수 (data = 컬럼 데이터)
//      function col_name(data) {
//      for (var i = 0; i < data.column.length; i++) {
//      console.log(data.column[i]);
//      $(
//      "<li class='last'><span class='column'>"
//      + data.column[i] + "</span></li>")
//      .appendTo($parent.children(".col"));
//      }
//      //컬럼 수신 이벤트 리스너 해제
//      socket.removeListener('colname');
//      }
//      }
//      //========= 테이블제약키 클릭, 제약키 생성
//      $browser.on("click", ".tableConstraint", function() {
//      var $this = $(this);
//      var $parent = $this.parent();
//      var tabname = $parent.parent().prev().text();
//      var scname = $parent.parent().parent().parent().parent().parent()
//      .prev().text();
//      if ($parent.children().hasClass("cons")) {
//      $parent.children(".cons").remove();
//      $this.prev().removeClass().addClass(
//      "hitarea expandable-hitarea lastExpandable-hitarea");
//      $parent.removeClass().addClass("expandable lastExpandable");
//      } else {
//      $this.prev().removeClass().addClass(
//      "hitarea collapsable-hitarea lastCollapsable-hitarea");
//      $parent.removeClass().addClass("collapsable lastCollapsable");
//      // 제약키 출력 함수 호출
//      consname_emit(tabname, scname, $parent);
//      }
//      });
//      //제약키 출력 함수
//      function consname_emit(tabname, scname, $parent) {
//      //테이블 이름 전송
//      socket.emit('set_tabname_cons', {
//      tabname : tabname,
//      scname : scname
//      });
//      //제약키 수신
//      socket.on('consname', function(data) {
//      if (data.constraint.length !== 0) {
//      $("<ul style='display: block;' class='cons'>").appendTo(
//      $parent);
//      //제약키 배열 생성 함수 호출
//      cons_name(data);
//      }
//      });
//      //제약키 배열 생성 함수 (data = 제약키 데이터)
//      function cons_name(data) {
//      for (var i = 0; i < data.constraint.length; i++) {
//      console.log(data.constraint[i]);
//      $(
//      "<li class='last'><span class='cons'>"
//      + data.constraint[i] + "</span></li>")
//      .appendTo($parent.children(".cons"));
//      }
//      //제약키 수신 이벤트 리스너 해제
//      socket.removeListener('consname');
//      }
//      }
//      //========= 테이블인덱스 클릭, 인덱스 생성
//      $browser.on("click", ".tableIndex", function() {
//      var $this = $(this);
//      var $parent = $this.parent();
//      var tabname = $parent.parent().prev().text();
//      var scname = $parent.parent().parent().parent().parent().parent()
//      .prev().text();
//      if ($parent.children().hasClass("ind")) {
//      $parent.children(".ind").remove();
//      $this.prev().removeClass().addClass(
//      "hitarea expandable-hitarea lastExpandable-hitarea");
//      $parent.removeClass().addClass("expandable lastExpandable");
//      } else {
//      $this.prev().removeClass().addClass(
//      "hitarea collapsable-hitarea lastCollapsable-hitarea");
//      $parent.removeClass().addClass("collapsable lastCollapsable");
//      // 인덱스 출력 함수 호출
//      indname_emit(tabname, scname, $parent);
//      }
//      });
//      //인덱스 출력 함수
//      function indname_emit(tabname, scname, $parent) {
//      //테이블 이름 전송
//      socket.emit('set_tabname_ind', {
//      tabname : tabname,
//      scname : scname
//      });
//      //인덱스 수신
//      socket.on('indname', function(data) {
//      if (data.index.length !== 0) {
//      $("<ul style='display: block;' class='ind'>").appendTo(
//      $parent);
//      //인덱스 배열 생성 함수 호출
//      ind_name(data);
//      }
//      });
//      //인덱스 배열 생성 함수 (data = 인덱스 데이터)
//      function ind_name(data) {
//      for (var i = 0; i < data.index.length; i++) {
//      console.log(data.index[i]);
//      $(
//      "<li class='last'><span class='ind'>"
//      + data.index[i] + "</span></li>").appendTo(
//      $parent.children(".ind"));
//      }
//      //인덱스 수신 이벤트 리스너 해제
//      socket.removeListener('indname');
//      }
//      }
