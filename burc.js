let ay = prompt(
  `Hangi ay dogdunuz? (Orn: Ocak, Subat..)`,
).toLowerCase();
ay = ay.replace(/ş/g, "s");
ay = ay.replace(/ı/g, "i");
ay = ay.replace(/ü/g, "u");

let gun = +prompt(`Hangi gun dogdunuz? (Orn: 1, 2..)`);

if (ay === "ocak" && gun >= 1 && gun <= 20) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Oglak" burcusunuzdur. Oğlak iradenin, azmin, bilincin burcudur. Hayatlarında tek bir amaca odaklanırlar. Soğukkanlılıkları, sağduyuları ve mantıklarıyla öne çıkarlar. Bu yüzden de insanlar onları soğuk, mesafeli ve kayıtsız olarak algılayabilir.`,
  );
} else if (ay === "ocak" && gun >= 21 && gun <= 31) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Kova" burcusunuzdur.  Kova özgürlüğün, yardımlaşmanın, ortaklaşmanın burcudur. Kova burcunun sahip olduğu yaratıcı fikirler onları her türlü disipline karşı durmaya meyilli, dengesiz ve tuhaf kılabilir.`,
  );
} else if (ay === "subat" && gun >= 1 && gun <= 19) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Kova" burcusunuzdur.  Kova özgürlüğün, yardımlaşmanın, ortaklaşmanın burcudur. Kova burcunun sahip olduğu yaratıcı fikirler onları her türlü disipline karşı durmaya meyilli, dengesiz ve tuhaf kılabilir.`,
  );
} else if (ay === "subat" && gun >= 20 && gun <= 28) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Balik" burcusunuzdur. Balık psikolojik berraklığın, hassaslığın, mutlak sevginin ve romantizmin burcudur. Bu burçtan insanlar fazla idealist ve irrasyonel davranabilirler.`,
  );
} else if (ay === "mart" && gun >= 1 && gun <= 20) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Balik" burcusunuzdur. Balık psikolojik berraklığın, hassaslığın, mutlak sevginin ve romantizmin burcudur. Bu burçtan insanlar fazla idealist ve irrasyonel davranabilirler.`,
  );
} else if (ay === "mart" && gun >= 21 && gun <= 31) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Koc" burcusunuzdur. Koç, burçlar kuşağının ilk burcudur. Epey hiperaktif olan bu burç eyleme geçme ve geleceği planlamaya düşkünlüğünün yanısıra cesareti ve otoriter yönüyle öne çıkar. Öncülerin ve liderlerin burcu olan Koç her zaman önde olma ihtiyacı hisseder.`,
  );
} else if (ay === "nisan" && gun >= 1 && gun <= 20) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Koc" burcusunuzdur. Koç, burçlar kuşağının ilk burcudur. Epey hiperaktif olan bu burç eyleme geçme ve geleceği planlamaya düşkünlüğünün yanısıra cesareti ve otoriter yönüyle öne çıkar. Öncülerin ve liderlerin burcu olan Koç her zaman önde olma ihtiyacı hisseder`,
  );
} else if (ay === "nisan" && gun >= 21 && gun <= 31) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Boga" burcusunuzdur.Boğa sakin gücü temsil eder. Sağduyulu, ayağı yere basan, sağlığına önem veren ve küçük şeylerden zevk alan bu burç kimi zaman aşırıya kaçıp pasif, tembel ve kayıtsız tavırlar sergileyebilir. `,
  );
} else if (ay === "mayis" && gun >= 1 && gun <= 20) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Boga" burcusunuzdur.Boğa sakin gücü temsil eder. Sağduyulu, ayağı yere basan, sağlığına önem veren ve küçük şeylerden zevk alan bu burç kimi zaman aşırıya kaçıp pasif, tembel ve kayıtsız tavırlar sergileyebilir.`,
  );
} else if (ay === "mayis" && gun >= 21 && gun <= 31) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Ikizler" burcusunuzdur. İkizler uyumun, zekanın, iletişim ve konuşma becerilerinin ve sosyalliğin burcudur. Ama bu özelliklerin etkisiyle kimi zaman sağı solu belli olmaz ve dikkatsiz davranmaya meyillidir.`,
  );
} else if (ay === "haziran" && gun >= 1 && gun <= 21) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Ikizler" burcusunuzdur.İkizler uyumun, zekanın, iletişim ve konuşma becerilerinin ve sosyalliğin burcudur. Ama bu özelliklerin etkisiyle kimi zaman sağı solu belli olmaz ve dikkatsiz davranmaya meyillidir.`,
  );
} else if (ay === "haziran" && gun >= 22 && gun <= 31) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Yengec" burcusunuzdur. Yengeç, hayallerin, hassaslığın, nezaketin, yumuşaklığın ve hayal gücünün burcudur. Genelde melankolik bir ruh haline sahip olan Yengeç geleceğe karşı kendini korumak için anılarına, geçmişteki olaylara ve duygularına saplanıp kalır. `,
  );
} else if (ay === "temmuz" && gun >= 1 && gun <= 22) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Yengec" burcusunuzdur. Yengeç, hayallerin, hassaslığın, nezaketin, yumuşaklığın ve hayal gücünün burcudur. Genelde melankolik bir ruh haline sahip olan Yengeç geleceğe karşı kendini korumak için anılarına, geçmişteki olaylara ve duygularına saplanıp kalır.`,
  );
} else if (ay === "temmuz" && gun >= 23 && gun <= 31) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Aslan" burcusunuzdur.  Aslan cömertliğin burcudur ama aynı zamanda hırsın, tahakkümün en saf halini temsil eder. İnsanların kendisine hayranlık duymasını bekleyen Aslan burcu bu özelliği yüzünden fazla kendini beğenmiş davranmaya meyillidir.`,
  );
} else if (ay === "agustos" && gun >= 1 && gun <= 23) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Aslan" burcusunuzdur. Aslan cömertliğin burcudur ama aynı zamanda hırsın, tahakkümün en saf halini temsil eder. İnsanların kendisine hayranlık duymasını bekleyen Aslan burcu bu özelliği yüzünden fazla kendini beğenmiş davranmaya meyillidir.`,
  );
} else if (ay === "agustos" && gun >= 24 && gun <= 31) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Basak" burcusunuzdur. Başak, düzenin, organizasyonun, netliğin, tevazu ve alçakgönüllülüğün burcudur. Ancak bu burca sahip insanların kendilerini ve başka insanları küçümsemeye eğilimi vardır.`,
  );
} else if (ay === "eylul" && gun >= 1 && gun <= 23) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Basak" burcusunuzdur. Başak, düzenin, organizasyonun, netliğin, tevazu ve alçakgönüllülüğün burcudur. Ancak bu burca sahip insanların kendilerini ve başka insanları küçümsemeye eğilimi vardır`,
  );
} else if (ay === "eylul" && gun >= 24 && gun <= 31) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Terazi" burcusunuzdur. Terazi adaletin, denge arayışının, uyumun burcudur. Terazi burçları bu özellikleri sebebiyle kendilerinden abartılı derecede taviz vermeye meyillidir `,
  );
} else if (ay === "ekim" && gun >= 1 && gun <= 23) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Terazi" burcusunuzdur. Terazi adaletin, denge arayışının, uyumun burcudur. Terazi burçları bu özellikleri sebebiyle kendilerinden abartılı derecede taviz vermeye meyillidir `,
  );
} else if (ay === "ekim" && gun >= 24 && gun <= 31) {
  alert(
    ` Tebrikler ${gun}/${ay} tarihinde dogduysaniz "Akrep" burcusunuzdur. Akrep olmak kesinlikle bir ayricaliktir. Sahip olduğunuz içgüdüler kendinizi tutkuyla ifade etmenizi ve duygularınızı yoğun bir biçimde yaşamanız konusunda etkilidir. Meseleleri en uç noktasına kadar taşımak konusunda üstünüze yok. Diğer insanlarla kurduğunuz ilişkilerde kimi zaman agresif hatta kıskanç davranabiliyorsunuz ama neyse ki zihniniz size doğru yolu göstererek davranışlarınızı sorgulamanızı sağlıyor. Bu sayede daima değişim halindesiniz! `,
  );
} else if (ay === "kasim" && gun >= 1 && gun <= 22) {
  alert(
    ` Tebrikler ${gun}/${ay} tarihinde dogduysaniz "Akrep" burcusunuzdur. Akrep olmak kesinlikle bir ayricaliktir. Sahip olduğunuz içgüdüler kendinizi tutkuyla ifade etmenizi ve duygularınızı yoğun bir biçimde yaşamanız konusunda etkilidir. Meseleleri en uç noktasına kadar taşımak konusunda üstünüze yok. Diğer insanlarla kurduğunuz ilişkilerde kimi zaman agresif hatta kıskanç davranabiliyorsunuz ama neyse ki zihniniz size doğru yolu göstererek davranışlarınızı sorgulamanızı sağlıyor. Bu sayede daima değişim halindesiniz!`,
  );
} else if (ay === "kasim" && gun >= 23 && gun <= 31) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Yay" burcusunuzdur. Yay macerayla, şans oyunlarıyla, yaşama sevinciyle ve pozitif düşünceyle ilişkilendirilen bir burçtur. Kendilerini ve başka insanları kandırmaya meyilli Yay burçları genelde gerçekleri görmekte zorlanıp bilinçsiz hareket edebilir.`,
  );
} else if (ay === "aralik" && gun >= 1 && gun <= 21) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Yay" burcusunuzdur. Yay macerayla, şans oyunlarıyla, yaşama sevinciyle ve pozitif düşünceyle ilişkilendirilen bir burçtur. Kendilerini ve başka insanları kandırmaya meyilli Yay burçları genelde gerçekleri görmekte zorlanıp bilinçsiz hareket edebilir.`,
  );
} else if (ay === "aralik" && gun >= 22 && gun <= 31) {
  alert(
    `${gun}/${ay} tarihinde dogduysaniz "Oglak" burcusunuzdur. Oğlak iradenin, azmin, bilincin burcudur. Hayatlarında tek bir amaca odaklanırlar. Soğukkanlılıkları, sağduyuları ve mantıklarıyla öne çıkarlar. Bu yüzden de nsanlar onları soğuk, mesafeli ve kayıtsız olarak algılayabilir.`,
  );
} else {
  alert(`Yanlis degerler girdiniz. Lutfen ornekte gosterildigi gibi giriniz!`);
}
