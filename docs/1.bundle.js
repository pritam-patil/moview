(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{359:function(e,t,n){},377:function(e,t,n){},380:function(e,t,n){},382:function(e,t,n){},384:function(e,t,n){},408:function(e,t,n){},477:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(14),i=n.n(o),l=n(9),c=n.n(l),s=n(12),u=n.n(s),m=n(11),h=n.n(m),v=n(8),d=n.n(v),p=n(1),g=n.n(p),f=n(10),E=n.n(f),y=n(2),C=n.n(y),b=n(0),k=n.n(b),_=n(412),S=n.n(_),M=n(86),w=n(479),I=n(474),N=n(471),x=n(78),A=(n(408),function(e){var t=e.genres,n=e.genre,a=e.onGenreChange;return k.a.createElement("div",{className:"selection"},k.a.createElement("label",null,"Genre"),k.a.createElement("select",{value:n,onChange:a},t.map(function(e){return k.a.createElement("option",{key:e.id,value:e.name},e.name)})))}),G=n(406),U=n.n(G),B=(n(386),n(384),function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=h()(this,(e=d()(t)).call.apply(e,[this].concat(r))),C()(g()(n),"onChange",function(e){n.props.onChange({type:n.props.data.label,value:e})}),n}return E()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.sliderId,a=this.props.data,r=a.min,o=a.max,i=a.step,l=a.value;return k.a.createElement("div",{className:"slider"},k.a.createElement("label",{htmlFor:n},t),k.a.createElement(U.a,{id:n,minValue:r,maxValue:o,step:i,onChange:this.onChange,value:l}))}}]),t}(k.a.Component)),R=(n(382),function(e){var t=e.onClick,n=e.onClose;return k.a.createElement("div",{className:"search-button"},k.a.createElement("i",{class:"far fa-times-circle fa-2x",onClick:n}),k.a.createElement("i",{id:"custom-search-button",role:"navigation",tabIndex:0,class:"fas fa-chevron-circle-right fa-2x",style:{color:"blue"},onClick:t}))}),T=(n(380),function(e){function t(){return c()(this,t),h()(this,d()(t).apply(this,arguments))}return E()(t,e),u()(t,[{key:"focusSearch",value:function(e){[x.c.ENTER].includes(e.keyCode)&&(e.preventDefault(),selectGenre.click())}},{key:"componentDidMount",value:function(){document.getElementById("custom-search-button").focus(),document.addEventListener("keyup",this.focusSearch,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.focusSearch,!1)}},{key:"render",value:function(){var e=this.props,t=e.genre,n=e.onModalClose,a=e.onGenreChange,r=e.onChange,o=e.year,i=e.rating,l=e.runtime,c=e.onSearchButtonClick;return k.a.createElement("section",{className:"navigation",search:!0,role:"search"},k.a.createElement(A,{genre:t,genres:x.d,onGenreChange:a}),k.a.createElement(B,{sliderId:"select-year",label:"Select Year:",data:o,onChange:r}),k.a.createElement(B,{sliderId:"select-rating",label:"Select rating:",data:i,onChange:r}),k.a.createElement(B,{sliderId:"select-len",label:"Select movie length:",data:l,onChange:r}),k.a.createElement(R,{onClick:c,onClose:n}))}}]),t}(k.a.Component)),D=n(110),O=n(6),F=n.n(O),L=n(476),j=n(191),z=n(99),H=(n(359),function(e){var t=e.movie,n=t.id,a=t.title,r=t.poster_path,o=t.release_date,i=t.overview,l=t.vote_average,c="https://image.tmdb.org/t/p/w342/".concat(r),s=o&&o.substring(0,4),u="/movies/".concat(n);return k.a.createElement(L.a,{href:u,article:"true",role:"article"},k.a.createElement(j.a,{centered:!0,size:"large",src:c,alt:a}),k.a.createElement(L.a.Content,null,k.a.createElement(L.a.Header,{content:a}),k.a.createElement(L.a.Description,null,"".concat(i.slice(0,60),"..."))),k.a.createElement(L.a.Content,{extra:!0},k.a.createElement("div",{className:"extra-details"},k.a.createElement(D.d,{title:a,vote_average:l}),k.a.createElement(z.a,{basic:!0}," ",s," "))))}),W=function(e){var t=e.movies;return k.a.createElement(L.a.Group,{itemsPerRow:x.b,doubling:!0},!!t&&t.map(function(e){return k.a.createElement(H,{key:e.id,movie:e})}))};W.propTypes={movies:F.a.object.isRequired};var X=W,Y=(n(377),function(e){function t(e){var n;return c()(this,t),n=h()(this,d()(t).call(this,e)),C()(g()(n),"focusSearchButton",function(e){var t=document.getElementById("custom-search");[x.c.ENTER].includes(e.keyCode)&&(e.preventDefault(),t.click())}),C()(g()(n),"errorHandler",function(e){if(!e.ok)throw Error(e.statureText);return e}),C()(g()(n),"fetchMovies",function(e){fetch(e).then(n.errorHandler).then(function(e){return e.json()}).then(function(e){return n.storeMovies(e)}).catch(function(e){console.log(">> something went wrong : ",e),n.setState({hasError:!0})})}),C()(g()(n),"storeMovies",function(e){var t=e.results.map(function(e){return{overview:e.overview,vote_count:e.vote_count,id:e.id,genre_ids:e.genre_ids,poster_path:e.poster_path,title:e.title,vote_average:e.vote_average,release_date:e.release_date}});n.setState({movies:t,isFetching:!1})}),n.state={movies:[],isFetching:navigator.onLine,hasError:!1},n.storeMovies=n.storeMovies.bind(g()(n)),n}return E()(t,e),u()(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}},{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.focusSearchButton,!1),this.fetchMovies(this.props.url)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;this.props.url!==e.url&&this.setState({isFetching:!0},function(){return t.fetchMovies(e.url)})}},{key:"render",value:function(){var e=this.state.movies||[];return k.a.createElement("div",{className:"movie-container",main:!0,role:"main"},k.a.createElement(X,{key:"movies-home",movies:e}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.focusSearchButton,!1)}}]),t}(k.a.Component));Y.propTypes={url:F.a.url};var J=Y,P=x.a.MIN_YEAR,V=x.a.MAX_YEAR,q=x.a.MIN_RATING,K=x.a.MAX_RATING,Q=x.a.MIN_TIME_MINS,Z=x.a.MAX_TIME_MINS,$=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=h()(this,(e=d()(t)).call.apply(e,[this].concat(r))),C()(g()(n),"state",{url:"https://api.themoviedb.org/3/genre/movie/list?api_key=651925d45022d1ae658063b443c99784&language=en-US",moviesUrl:"https://api.themoviedb.org/3/discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1",genre:null,year:{label:"year",min:1970,max:2019,step:1,value:{min:P,max:V}},rating:{label:"rating",min:0,max:10,step:1,value:{min:q,max:K}},runtime:{label:"runtime",min:0,max:300,step:15,value:{min:Q,max:Z}},isOpen:!1,hasError:!1}),C()(g()(n),"airbrake",new S.a({projectId:219983,projectKey:"7881b9af5510c9794ba34bb4d525eecd"})),C()(g()(n),"onGenreChange",function(e){n.setState({genre:e.target.value})}),C()(g()(n),"onChange",function(e){n.setState(C()({},e.type,i()({},n.state[e.type],{value:e.value})))}),C()(g()(n),"toggleModal",function(){n.setState({isOpen:!n.state.isOpen})}),C()(g()(n),"onCloseModal",function(){n.setState({isOpen:!1})}),C()(g()(n),"generateUrl",function(){var e=n.state,t=e.year,a=e.rating,r=e.runtime,o=x.d.find(function(e){return e.name===(n.state.genre||"Action")}).id,i="https://api.themoviedb.org/3/discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&"+"with_genres=".concat(o,"&")+"primary_release_date.gte=".concat(t.value.min,"-01-01&")+"primary_release_date.lte=".concat(t.value.max,"-12-31&")+"vote_average.gte=".concat(a.value.min,"&")+"vote_average.lte=".concat(a.value.max,"&")+"with_runtime.gte=".concat(r.value.min,"&")+"with_runtime.lte=".concat(r.value.max,"&")+"page=1&";n.setState({moviesUrl:i})}),C()(g()(n),"onSearchButtonClick",function(){n.toggleModal(),n.generateUrl()}),n}return E()(t,e),u()(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),this.airbrake.notify({error:e,params:{info:t}})}},{key:"render",value:function(){var e=this,t=this.state,n=t.genre,a=t.hasError,o=t.isOpen,i=this.props.offline,l=n||x.e;return a?k.a.createElement(D.a,null):k.a.createElement("div",{className:"main"},k.a.createElement(M.a,{disabled:i,circular:!0,id:"custom-search",name:"filter",size:"big",tabIndex:2,onClick:this.toggleModal,className:"filter"}),k.a.createElement(w.a,{classNames:{modal:"modal-custom"},open:o,onClose:this.onCloseModal,size:"mini"},k.a.createElement(T,r()({onChange:this.onChange,onGenreChange:this.onGenreChange,onModalClose:this.onCloseModal,onSearchButtonClick:this.onSearchButtonClick,onClose:this.toggleModal},this.state))),i?k.a.createElement(D.c,null):k.a.createElement("div",{onOnline:function(t){return e.updateConnection(!1)},onOffline:function(t){return e.updateConnection(!0)}},k.a.createElement(I.a,{tabular:!0,attached:"top"},k.a.createElement(I.a.Item,{active:!0,color:l===x.e?"inherit":"blue",name:l})),k.a.createElement(N.a,{attached:"bottom"},k.a.createElement(J,{genre:this.state.genre,url:this.state.moviesUrl,onClick:this.toggleModal}))))}}]),t}(k.a.Component);t.default=$}}]);